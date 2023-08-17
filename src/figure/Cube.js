import {useRef, useState} from 'react'
import {useFrame, useLoader} from '@react-three/fiber'
import {Select} from '@react-three/postprocessing'
import {Euler, TextureLoader} from "three";

function Cube({colorMap, ...props}) {
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
                <boxGeometry attach="geometry" args={[1, 1, 1]}/>
                <meshStandardMaterial map={colorMap} attach="material" />
            </mesh>
        </Select>
    )
}

// const [[a, b, c, d, e]] = useState(() => [...Array(5)].map(createRef))
// return (
//     <Canvas orthographic camera={{ zoom: 80 }}>
//         <Nodes>
//             <Node ref={a} name="a" color="#204090" position={[-2, 2, 0]} connectedTo={[b, c, e]} />
//             <Node ref={b} name="b" color="#904020" position={[2, -3, 0]} connectedTo={[d, a]} />
//             <Node ref={c} name="c" color="#209040" position={[-0.25, 0, 0]} />
//             <Node ref={d} name="d" color="#204090" position={[0.5, -0.75, 0]} />
//             <Node ref={e} name="e" color="#204090" position={[-0.5, -1, 0]} />
//         </Nodes>
//     </Canvas>

export default Cube