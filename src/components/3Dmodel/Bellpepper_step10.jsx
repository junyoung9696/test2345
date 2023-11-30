/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 bellpepper_step10.gltf --transform
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF(
    "/glb/bellpepper_step10-transformed.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, -1.33, 0]} scale={10} position={[0, -3, 0]}>
        <mesh geometry={nodes["result-9"].geometry} material={materials.stem} />
        <mesh
          geometry={nodes["result-9_1"].geometry}
          material={materials.leaf_disease}
        />
        <mesh
          geometry={nodes["result-9_2"].geometry}
          material={materials["fruit-ripe"]}
        />
        <mesh
          geometry={nodes["result-9_3"].geometry}
          material={materials.VG07brn1}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/glb/bellpepper_step10-transformed.glb");