"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Ship = () => {
  const { scene } = useGLTF("./assets/models/ship/scene.gltf");

  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      mesh.material = new THREE.MeshStandardMaterial({
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
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
          autoRotate
          autoRotateSpeed={0.5} // Adjust speed as needed
        />
        <Environment files={envSrc} backgroundIntensity={5} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
        <directionalLight position={[-10, 10, -10]} intensity={2} />
        <Ship />
      </Suspense>
    </Canvas>
  );
};

export default ShipCanvas;
