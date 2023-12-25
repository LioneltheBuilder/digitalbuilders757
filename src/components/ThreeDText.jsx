import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDText = () => {
  const mountRef = useRef();

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add 3D text
    const loader = new THREE.FontLoader();
    loader.load('fonts/helvetiker_regular.typeface.json', function (font) { // Make sure to have the font file
      const textGeometry = new THREE.TextGeometry('The Digital Builders', {
        font: font,
        size: 80,
        height: 5,
      });
      const textMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      scene.add(textMesh);
    });

    // Camera position
    camera.position.z = 500;

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);

      // Optional: Add some rotation to the text
      // textMesh.rotation.x += 0.01;
      // textMesh.rotation.y += 0.01;
    };

    animate();

    // Handle resizing
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default ThreeDText;
