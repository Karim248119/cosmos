"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Texture,
} from "@react-three/drei";
import * as THREE from "three";

const Ship = () => {
  const { scene } = useGLTF("./assets/models/ship/scene.gltf");

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: 0xffffff, // White base color for a silver effect
        metalness: 1, // Fully metallic
        roughness: 0, // Smooth, mirror-like surface
        envMapIntensity: 0, // Increased reflection intensity
      });
    }
  });

  return <primitive object={scene} scale={0.45} position={[0, 1, -2]} />;
};

const ShipCanvas = ({
  envSrc = "./assets/models/env/solar.jpg",
}: {
  envSrc?: string;
}) => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{
        preserveDrawingBuffer: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
          autoRotate
        />
        {/* Environment Map with increased intensity */}
        <Environment
          files={envSrc} // Bright HDRI environment
          backgroundIntensity={0} // Brighten the environment reflections

          // backgroundRotation={
          //   new THREE.Euler(0, Math.PI / 2, 0) // Rotate the environment
          // }
        />
        {/* Additional Ambient and Directional Lighting */}
        <ambientLight intensity={1.5} /> {/* Increased ambient light */}
        <directionalLight position={[10, 10, 10]} intensity={2} />
        <directionalLight position={[-10, 10, -10]} intensity={2} />
        <Ship />
      </Suspense>
    </Canvas>
  );
};

export default ShipCanvas;