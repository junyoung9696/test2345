/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 level21.gltf --transform
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/glb/level21-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (props.play) {
      actions["Key.019Action"].play();
    }
  }, [props.play]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="result_021-">
          <mesh
            name="result-5_010"
            geometry={nodes["result-5_010"].geometry}
            material={materials["leaf_disease.001"]}
            morphTargetDictionary={nodes["result-5_010"].morphTargetDictionary}
            morphTargetInfluences={nodes["result-5_010"].morphTargetInfluences}
          />
          <mesh
            name="result-5_010_1"
            geometry={nodes["result-5_010_1"].geometry}
            material={materials["leaf_disease.001"]}
            morphTargetDictionary={
              nodes["result-5_010_1"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_010_1"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_010_2"
            geometry={nodes["result-5_010_2"].geometry}
            material={materials["leaf_disease.001"]}
            morphTargetDictionary={
              nodes["result-5_010_2"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_010_2"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_010_3"
            geometry={nodes["result-5_010_3"].geometry}
            material={materials["leaf_disease.001"]}
            morphTargetDictionary={
              nodes["result-5_010_3"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_010_3"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_010_4"
            geometry={nodes["result-5_010_4"].geometry}
            material={materials["petals.001"]}
            morphTargetDictionary={
              nodes["result-5_010_4"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_010_4"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_010_5"
            geometry={nodes["result-5_010_5"].geometry}
            material={materials["stem.001"]}
            morphTargetDictionary={
              nodes["result-5_010_5"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_010_5"].morphTargetInfluences
            }
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/level21-transformed.glb");
