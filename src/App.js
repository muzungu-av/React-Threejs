import React from 'react';
import './App.css';

import {useRef, useState} from 'react'

import {Canvas, useFrame} from '@react-three/fiber'
import './App.css';
import Cube from "./figure/Cube";
import {Selection, Select, EffectComposer, Outline} from '@react-three/postprocessing'
import {PerspectiveCamera, RenderTexture, Text} from "@react-three/drei";
import {BoxGeometry, Color, DirectionalLight, Mesh, MeshLambertMaterial, Raycaster, Scene, WebGLRenderer} from "three";


function Box(props) {
    const ref = useRef()
    const [hovered, hover] = useState(null)
    useFrame((state, delta) => (ref.current.rotation.x += delta))
    return (
        <Select enabled={hovered}>
            <mesh
                {...props}
                ref={ref}
                onPointerOver={() => hover(true)}
                onPointerOut={() => hover(false)}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial color={'orange'}/>
            </mesh>
        </Select>
    )
}

export default function App(props) {
    return (
        <Canvas>
            <ambientLight intensity={5}/>
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
            <pointLight position={[-10, -10, -10]}/>
            <Selection>
                <EffectComposer multisampling={8} autoClear={false}>
                    <Outline blur visibleEdgeColor="white" edgeStrength={100} width={1000} />
                </EffectComposer>
                <Box position={[-1.2, 0, 0]}/>
                <Box position={[1.2, 0, 0]}/>
            </Selection>
        </Canvas>
    )
}
