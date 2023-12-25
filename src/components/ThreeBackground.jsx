import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    // ... Initialize camera, renderer, lights, objects, etc.

    const renderer = new THREE.WebGLRenderer();
    mountRef.current.appendChild(renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      // Update your scene here
      renderer.render(scene, camera);
    };

    animate();

    // Handle resizing
    const handleResize = () => {
      // Update camera aspect ratio and renderer size
    };
    window.addEventListener('resize', handleResize);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={mountRef} style={{ height: '100%', width: '100%' }} />;
};

export default ThreeBackground;
