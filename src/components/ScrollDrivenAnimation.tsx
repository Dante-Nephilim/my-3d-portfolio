import { useEffect, useRef } from "react";
import * as THREE from "three";
import diffuseImagePath from "../assets/8081_earthmap2k.jpg";
import normalImagePath from "../assets/8081_earthlights2k.jpg";
import roughnessImagePath from "../assets/brown_mud_leaves_01_rough_4k.jpg";
import moonDiffusePath from "../assets/moonmap4k.jpg";

export function ScrollDrivenAnimation() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const domElement = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1920 / 1080, 0.1, 1000);
    camera.updateProjectionMatrix();

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(1920, 1080);
    domElement.appendChild(renderer.domElement);

    const diffuseTexture = new THREE.TextureLoader().load(diffuseImagePath);
    const normalTexture = new THREE.TextureLoader().load(normalImagePath);
    const roughnessTexture = new THREE.TextureLoader().load(roughnessImagePath);

    const material = new THREE.MeshStandardMaterial({
      map: diffuseTexture,
      normalMap: normalTexture,
      roughnessMap: roughnessTexture,
    });

    const geometry = new THREE.SphereGeometry(4, 128, 128);
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const moonDiffuse = new THREE.TextureLoader().load(moonDiffusePath);
    const moonMaterial = new THREE.MeshStandardMaterial({
      map: moonDiffuse,
    });

    const moonGeometry = new THREE.SphereGeometry(0.5, 64, 64);
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.set(6, 0, 0);
    scene.add(moon);

    camera.position.z = 10;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 2, 2);
    scene.add(directionalLight);

    let isDragging = false;
    let lastX: number;
    let moonAngle = 0;

    domElement.addEventListener("mousedown", (e) => {
      isDragging = true;
      lastX = e.clientX;
    });

    window.addEventListener("mouseup", () => {
      isDragging = false;
    });

    window.addEventListener("mousemove", (e) => {
      if (isDragging) {
        const deltaX = e.clientX - lastX;
        lastX = e.clientX;
        sphere.rotation.y += deltaX * 0.01;
      }
    });
    const updateSize = () => {
      if (domElement) {
        const width = domElement.clientWidth;
        const height = domElement.clientHeight / 2;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize();
    const animate = () => {
      requestAnimationFrame(animate);

      moonAngle += 0.02;
      moon.position.x = 6 * Math.cos(moonAngle);
      moon.position.z = 6 * Math.sin(moonAngle);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      domElement.removeChild(renderer.domElement);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full"></div>;
}
