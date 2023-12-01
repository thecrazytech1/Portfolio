import { OrbitControls } from "@react-three/drei";
import React from "react";

export default function NavBar() {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
