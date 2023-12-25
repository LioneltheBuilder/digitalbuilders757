import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const refContainer = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee); // Light grey background

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    refContainer.current.appendChild(renderer.domElement);

    // Create a simple cube and add it to the scene
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add a light
    const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    scene.add(light);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      renderer.setSize(innerWidth, innerHeight);
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      refContainer.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={refContainer} style={{ width: '100vw', height: '100vh' }}></div>;
};

export default ThreeBackground;
