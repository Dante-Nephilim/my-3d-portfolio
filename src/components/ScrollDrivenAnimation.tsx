import { useEffect, useRef } from "react";
import * as THREE from "three";
import ScrollMagic from "scrollmagic";
import diffuseImagePath from "../assets/8081_earthmap2k.jpg";
import normalImagePath from "../assets/8081_earthlights2k.jpg";
import roughnessImagePath from "../assets/brown_mud_leaves_01_rough_4k.jpg";

export function ScrollDrivenAnimation() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const domElement = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      1920 / 1080, // Desired aspect ratio
      0.1,
      1000
    );
    camera.updateProjectionMatrix(); // Update after changing aspect

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio); // Increase render clarity
    renderer.setSize(1920, 1080); // Set to desired resolution
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    domElement.appendChild(renderer.domElement);

    const diffuseTexture = new THREE.TextureLoader().load(diffuseImagePath);
    const normalTexture = new THREE.TextureLoader().load(normalImagePath);
    const roughnessTexture = new THREE.TextureLoader().load(roughnessImagePath);

    const material = new THREE.MeshStandardMaterial({
      map: diffuseTexture,
      normalMap: normalTexture,
      roughnessMap: roughnessTexture,
    });

    const geometry = new THREE.SphereGeometry(2, 128, 128); // Increased geometry resolution

    const sphere = new THREE.Mesh(geometry, material);
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    sphere.position.x = 0; // Centered
    scene.add(sphere);

    camera.position.z = 5;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 2, 2);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xff0000, 0.6, 100);
    pointLight.position.set(-2, 2, 2);
    pointLight.castShadow = true;
    scene.add(pointLight);

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01; // Rotation around Y-axis only
      renderer.render(scene, camera);
    };
    animate();

    const controller = new ScrollMagic.Controller();

    const updateSphereRotation = (progress: number) => {
      const angle = progress * Math.PI * 2;
      sphere.rotation.y = angle;
    };

    new ScrollMagic.Scene({
      duration: 1000,
      triggerElement: domElement,
      triggerHook: "onCenter",
    })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .on("progress", (event: any) => {
        updateSphereRotation(event.progress);
      })
      .addTo(controller);

    return () => {
      domElement.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} className="fixed top-0 left-0 w-full h-full"></div>
  );
}
