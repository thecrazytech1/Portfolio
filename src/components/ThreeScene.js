import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const cubeRef = useRef();

  useFrame(() => {
    // Update rotation on each frame
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[5, 5, 5]} />
      <meshBasicMaterial color={0x00ff00} />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube />
    </>
  );
};

export default ThreeScene;
