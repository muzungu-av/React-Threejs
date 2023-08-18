import React, {Suspense, useRef} from 'react';
import './App.css';
import {Canvas, useFrame, useLoader} from '@react-three/fiber'
import {Selection, EffectComposer, Outline} from '@react-three/postprocessing'
import {CubeTextureLoader, TextureLoader} from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import {Environment, OrbitControls, useCubeTexture, useTexture} from "@react-three/drei";


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
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshBasicMaterial key={0} attach={`material-0`} map={envMap.map_0} />
        <meshBasicMaterial key={1} attach={`material-1`} map={envMap.map_1} />
        <meshBasicMaterial key={2} attach={`material-2`} map={envMap.map_2} />
        <meshBasicMaterial key={3} attach={`material-3`} map={envMap.map_3} />
        <meshBasicMaterial key={4} attach={`material-4`} map={envMap.map_4} />
        <meshBasicMaterial key={5} attach={`material-5`} map={envMap.map_5} />
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
            <color attach="background" args={[50, 77, 17]} />
            <OrbitControls />
            <ambientLight args={[0xffffff, 25]} />
            <pointLight args={[0xffffff, 1]} position={[2, 3, 4]} />
            <Suspense fallback={null}>
                <Cube />
            </Suspense>
        </Canvas>
    );
}
