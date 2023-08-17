import React from 'react';
import './App.css';
import {Canvas, useFrame, useLoader} from '@react-three/fiber'
import './App.css';
import Cube from "./figure/Cube";
import {Selection, EffectComposer, Outline} from '@react-three/postprocessing'
import {
    TextureLoader
} from "three";


export default function App() {
const colorMap_1 = useLoader(TextureLoader, '_.png')
const colorMap_2 = useLoader(TextureLoader, 'А.png')
const colorMap_3 = useLoader(TextureLoader, 'О.png')
const colorMap_4 = useLoader(TextureLoader, 'У.png')
const colorMap_5 = useLoader(TextureLoader, 'Ы.png')
const colorMap_6 = useLoader(TextureLoader, 'Э.png')
    return (
        <Canvas>
            <ambientLight intensity={3}/>
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
            <pointLight position={[-10, -10, -10]}/>
            <Selection>
                <EffectComposer multisampling={8} autoClear={false}>
                    <Outline blur visibleEdgeColor="white" edgeStrength={100} width={1000} />
                </EffectComposer>
                <Cube colorMap={colorMap_2} position={[-5, 0, 0]} />
                <Cube colorMap={colorMap_3}  position={[-3, 0, 0]} />
                <Cube colorMap={colorMap_4} position={[-1, 0, 0]} />
                <Cube colorMap={colorMap_5}  position={[1, 0, 0]} />
                <Cube colorMap={colorMap_6} position={[3, 0, 0]} />
                <Cube colorMap={colorMap_1}  position={[5, 0, 0]} />
            </Selection>
        </Canvas>
    )
}
