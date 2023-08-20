import React, {useRef, useState} from 'react';
import './App.css';
import {Canvas, useFrame} from '@react-three/fiber'
import {useTexture} from "@react-three/drei";
import {Selection, EffectComposer, Outline, Select} from "@react-three/postprocessing";

const Cube: React.FC = ({speed_x, speed_y, ...props}) => {

    const envMap = useTexture({
        map_0: '0.png',
        map_1: '1.png',
        map_2: '2.png',
        map_3: '3.png',
        map_4: '4.png',
        map_5: '5.png',
    })

    const ref = useRef()

    const [hovered, hover] = useState(null)

    useFrame((state, delta) => {
        ref.current.rotation.y += delta / speed_x;
        ref.current.rotation.x += delta / speed_y
    })

    return (
        <Select enabled={hovered}>
            <mesh  {...props}
                   ref={ref}
                   onPointerOver={() => hover(true)}
                   onPointerOut={() => hover(false)}>

                <boxGeometry attach="geometry" args={[1, 1, 1]}/>
                <meshStandardMaterial metalness={0.9} roughness={0.1} attach={`material-0`} map={envMap.map_0}/>
                <meshStandardMaterial metalness={0.9} roughness={0.1} attach={`material-1`} map={envMap.map_1}/>
                <meshStandardMaterial metalness={0.9} roughness={0.1} attach={`material-2`} map={envMap.map_2}/>
                <meshStandardMaterial metalness={0.9} roughness={0.1} attach={`material-3`} map={envMap.map_3}/>
                <meshStandardMaterial metalness={0.9} roughness={0.1} attach={`material-4`} map={envMap.map_4}/>
                <meshStandardMaterial metalness={0.9} roughness={0.1} attach={`material-5`} map={envMap.map_5}/>
            </mesh>
        </Select>
    );
};

export default function App() {
    return (
        <Canvas
            camera={{
                position: [1, 1, 2],
                fov: 75,
                near: 0.1,
                far: 100
            }}
            pixelRatio={Math.min(window.devicePixelRatio, 2)}>
            <color attach="background" args={[0.05, 0.05, 0.05]}/>
            <ambientLight args={[0xffffff, 25]}/>
            <Selection>
                <EffectComposer multisampling={8} autoClear={false}>
                    <Outline blur visibleEdgeColor="blue" edgeStrength={100} width={1000}/>
                </EffectComposer>
                <Cube position={[0, 0, -4]} speed_x={1.5} speed_y={1.3}/>
                <Cube position={[-3, -1, -1]} speed_x={2.1} speed_y={3.4}/>
                <Cube position={[-1, -2, 0]} speed_x={1.8} speed_y={1}/>
                <Cube position={[-4, -3, -5]} speed_x={0.9} speed_y={0.7}/>
                <Cube position={[-6, -5, -3]} speed_x={1.2} speed_y={3}/>
                <Cube position={[1, -2, -4]} speed_x={2.7} speed_y={1.8}/>
            </Selection>
        </Canvas>
    );
}
