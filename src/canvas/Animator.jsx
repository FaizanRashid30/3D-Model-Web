import React from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF } from "@react-three/drei";

const Animator = () => {
	const gltf = useGLTF("/Ankit.glb");
	return <primitive object={gltf.scene} />;
};

export default Animator;
