import { useEffect, useRef } from "react";
import * as THREE from "three";
import * as CANNON from "cannon";

export function CatapultGame() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.y = 5;
    camera.position.z = 10;
    camera.lookAt(0, 2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 7);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Physics world
    const world = new CANNON.World();
    world.gravity.set(0, -10, 0);

    // Floor
    const floorMaterial = new CANNON.Material("floorMaterial");
    const floorShape = new CANNON.Plane();
    const floorBody = new CANNON.Body({
      mass: 0,
      material: floorMaterial,
    });
    floorBody.addShape(floorShape);
    floorBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    world.addBody(floorBody);

    const floorGeometry = new THREE.PlaneGeometry(10, 10);
    const floorMesh = new THREE.Mesh(
      floorGeometry,
      new THREE.MeshStandardMaterial({ color: 0x777777 })
    );
    floorMesh.rotation.x = -Math.PI / 2;
    scene.add(floorMesh);

    // Ball
    const ballGeometry = new THREE.SphereGeometry(0.5);
    const ballMaterial = new THREE.MeshStandardMaterial({ color: 0xaa2222 });
    const ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
    scene.add(ballMesh);

    const ballBody = new CANNON.Body({
      mass: 0.5,
      shape: new CANNON.Sphere(0.5),
    });
    ballBody.position.set(0, 1, 4);
    world.addBody(ballBody);

    // Mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let isDragging = false;
    let dragStartZ = 0;

    mountRef.current.addEventListener("mousedown", (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(ballMesh);
      if (intersects.length > 0) {
        isDragging = true;
        dragStartZ = ballBody.position.z;
      }
    });

    mountRef.current.addEventListener("mousemove", (event) => {
      if (isDragging) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(floorMesh);
        if (intersects.length > 0) {
          const newZ = intersects[0].point.z;
          ballBody.position.z = newZ;
        }
      }
    });

    mountRef.current.addEventListener("mouseup", () => {
      if (isDragging) {
        const deltaZ = ballBody.position.z - dragStartZ;
        ballBody.velocity.z = -deltaZ * 50;
        isDragging = false;
      }
    });

    function animate() {
      requestAnimationFrame(animate);

      // Restrict ball within bounds
      if (ballBody.position.z > 5)
        ballBody.velocity.z = -Math.abs(ballBody.velocity.z);
      if (ballBody.position.z < -5)
        ballBody.velocity.z = Math.abs(ballBody.velocity.z);

      ballMesh.position.set(
        ballBody.position.x,
        ballBody.position.y,
        ballBody.position.z
      );
      ballMesh.quaternion.set(
        ballBody.quaternion.x,
        ballBody.quaternion.y,
        ballBody.quaternion.z,
        ballBody.quaternion.w
      );

      renderer.render(scene, camera);
      world.step(1 / 60);
    }

    animate();
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
}

export default CatapultGame;
