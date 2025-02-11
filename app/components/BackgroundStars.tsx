// components/BackgroundStars.js
import { useEffect, useRef } from "react";
import * as THREE from "three";

const BackgroundStars = () => {

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer.
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    // Position the camera slightly away from the origin.
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    const container = containerRef.current;
    if (container) {
      container.appendChild(renderer.domElement);
    }

    // Create a star field.
    const starsGeometry = new THREE.BufferGeometry();
    const starVertices = [];
    const starCount = 10000;
    for (let i = 0; i < starCount; i++) {
      // Random positions spread out in 3D space.
      starVertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
      starVertices.push(THREE.MathUtils.randFloatSpread(2000)); // y
      starVertices.push(THREE.MathUtils.randFloatSpread(2000)); // z
    }
    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    // Animation loop – rotate the star field slowly to create a moving effect.
    const animate = () => {
      requestAnimationFrame(animate);
      starField.rotation.x += 0.0005;
      starField.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    // Adjust camera and renderer size when the window is resized.
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize, false);

    // Cleanup on component unmount.
    return () => {
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, // Place it behind all other content.
      }}
    />
  );
};

export default BackgroundStars;
