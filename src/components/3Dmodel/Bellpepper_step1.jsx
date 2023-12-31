/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 bellpepper_step1.gltf --transform
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/glb/bellpepper_step1-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group
        rotation={[Math.PI, -1.21, Math.PI]}
        scale={35.4}
        position={[0, -3, 0]}
      >
        <mesh geometry={nodes["result-0"].geometry} material={materials.stem} />
        <mesh
          geometry={nodes["result-0_1"].geometry}
          material={materials.leaf_disease}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/glb/bellpepper_step1-transformed.glb");
