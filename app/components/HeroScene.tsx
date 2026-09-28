"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const count = 1800;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, [count]);

 useFrame((state) => {
  if (!pointsRef.current) return;
  const elapsed = state.clock.elapsedTime;

if (elapsed < 1.4) {
  const progress = Math.min(elapsed / 1.4, 1);

  // Smooth deceleration
  const easedProgress =
    1 - Math.pow(1 - progress, 4);

  pointsRef.current.position.x =
    THREE.MathUtils.lerp(-2.5, 0, easedProgress);

  pointsRef.current.rotation.y =
    THREE.MathUtils.lerp(-0.8, 0, easedProgress);
}

  const mouseX = state.pointer.x;
  const mouseY = state.pointer.y;

  pointsRef.current.rotation.y +=
    (mouseX * 0.12 - pointsRef.current.rotation.y) * 0.025;

  pointsRef.current.rotation.x +=
    (-mouseY * 0.08 - pointsRef.current.rotation.x) * 0.025;

  pointsRef.current.rotation.z =
    Math.sin(state.clock.elapsedTime * 0.15) * 0.03;

  const breathing =
    1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.025;

  pointsRef.current.scale.set(
    breathing,
    breathing,
    breathing
  );

  const scrollY = window.scrollY;

  pointsRef.current.position.y = scrollY * 0.00015;
  pointsRef.current.position.z = -scrollY * 0.00008;
});

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function HeroScene() {
  return (
    <div className="hero-scene">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 60,
        }}
        dpr={[1, 2]}
      >
        <ParticleField />
      </Canvas>
    </div>
  );
}