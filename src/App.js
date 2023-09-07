import React, {useRef, useState} from 'react';
import './App.css';
import {Canvas, useFrame} from '@react-three/fiber'
import {useTexture} from "@react-three/drei";
import {Selection, EffectComposer, Outline, Select} from "@react-three/postprocessing";
import {Physics, useBox, usePlane} from "@react-three/cannon";

const Cube: React.FC = ({speed_x, speed_y, ...props}) => {

    const envMap = useTexture({
        map_0: '0.png',
        map_1: '1.png',
        map_2: '2.png',
        map_3: '3.png',
        map_4: '4.png',
        map_5: '5.png',
    })

    const [ref] = useBox(() => ({mass: 1, position: [100, 10, 10], rotation: [0.4, 0.2, 0.5], ...props}))

    const [hovered, hover] = useState(null)

    // useFrame((state, delta) => {
    //     ref.current.rotation.y += delta / speed_x;
    //     ref.current.rotation.x += delta / speed_y;
    // })

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

const Plane: React.FC = (props) => {
    const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0], ...props}))
    return (
        <mesh ref={ref} receiveShadow>
            <planeGeometry args={[20, 25]}/>
            <meshStandardMaterial color={[0.01, 0.01, 0.02]}/>
        </mesh>
    )
}

export default function App() {
    return (
        <Canvas
            camera={{
                position: [5, 3, -4],
                fov: 100,
                near: 0.2,
                far: 100
            }}
            pixelRatio={Math.min(window.devicePixelRatio, 2)}>
            <color attach="background" args={[0.05, 0.05, 0.05]}/>
            <ambientLight args={[0xffffff, 25]}/>
            <Selection>
                <EffectComposer multisampling={8} autoClear={false}>
                    <Outline blur visibleEdgeColor="blue" edgeStrength={100} width={1000}/>
                </EffectComposer>
                <directionalLight position={[10, 10, 10]} castShadow shadow-mapSize={[2048, 2048]}/>
                <Physics gravity={[0, -0.9, 0]} allowSleep={false}>
                    <Cube position={[0, 7, 1]}/>
                    <Cube position={[2.2, 6, 1.7]} />
                    <Cube position={[-1.7, 5, 1.7]} />
                    <Cube position={[2.3, 5, 0.1]} />
                    <Cube position={[-1, 4.5, -1]} />
                    <Cube position={[1, 3, -1.45]} />
                    <Plane position={[0, -2.5, 0]}/>
                </Physics>
            </Selection>
        </Canvas>
    );
}
