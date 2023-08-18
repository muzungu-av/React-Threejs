import React, {Suspense} from 'react';
import './App.css';
import {Canvas} from '@react-three/fiber'
import {OrbitControls, useTexture} from "@react-three/drei";

const Cube: React.FC = () => {
    const envMap = useTexture({
        map_0: '0.png',
        map_1: '1.png',
        map_2: '2.png',
        map_3: '3.png',
        map_4: '4.png',
        map_5: '5.png',
    })
    return (<mesh>
        <boxGeometry attach="geometry" args={[1, 1, 1]}/>
        <meshStandardMaterial metalness={0.9} roughness={0.1} attach={`material-0`} map={envMap.map_0}/>
        <meshStandardMaterial metalness={0.9} roughness={0.1} attach={`material-1`} map={envMap.map_1}/>
        <meshStandardMaterial metalness={0.9} roughness={0.1} attach={`material-2`} map={envMap.map_2}/>
        <meshStandardMaterial metalness={0.9} roughness={0.1} attach={`material-3`} map={envMap.map_3}/>
        <meshStandardMaterial metalness={0.9} roughness={0.1} attach={`material-4`} map={envMap.map_4}/>
        <meshStandardMaterial metalness={0.9} roughness={0.1} attach={`material-5`} map={envMap.map_5}/>
    </mesh>);
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
            <color attach="background" args={[0.2, 0.2, 0.2]}/>
            <OrbitControls/>
            <ambientLight args={[0xffffff, 25]}/>
            <Suspense fallback={null}>
                <Cube/>
            </Suspense>
        </Canvas>
    );
}
