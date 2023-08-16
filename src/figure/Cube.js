import {useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {Select} from '@react-three/postprocessing'
import {RenderTexture, OrbitControls, PerspectiveCamera, Text, ContactShadows} from '@react-three/drei'

//https://docs.pmnd.rs/react-three-fiber/getting-started/examples

// function Cube() {
//     const [hovered, hover] = useState(null)
//     return (
//         <Select enabled={hovered}>
//         <mesh>
//             <boxGeometry />
//             <meshStandardMaterial>
//                 <RenderTexture attach="map" anisotropy={16}>
//                     <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
//                     <color attach="background" args={['orange']} />
//                     <ambientLight intensity={0.5} />
//                     <directionalLight position={[10, 10, 5]} />
//                     {/* eslint-disable-next-line react/jsx-no-undef */}
//                     <Text font={'bebas'} fontSize={3} color="#555">
//                         MA
//                     </Text>
//
//                 </RenderTexture>
//             </meshStandardMaterial>
//         </mesh>
//         </Select>
//     )
// }

function Cube(props) {

        const ref = useRef()
        const [hovered, hover] = useState(null)
        console.log(hovered)

        return (
            <Select enabled={hovered}>

                <mesh ref={ref} {...props} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
                    <boxGeometry />

                    <meshStandardMaterial color='#f0f'>

                                     <RenderTexture attach="map" anisotropy={16}>
                                         <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />

                                         <ambientLight intensity={17} />
                                         <directionalLight position={[10, 10, 5]} />
                                         <Text font={'bebas'} fontSize={3}>
                                             MA
                                         </Text>
                                     </RenderTexture>
                    </meshStandardMaterial>

                </mesh>
            </Select>
        )
    }
        // <Select enabled={hovered}>
        //     <mesh ref={ref} {...props} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
        //         <boxGeometry/>
        //         <meshStandardMaterial >
        //             <RenderTexture attach="map" anisotropy={16}>
        //                 <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
        //
        //                 <ambientLight intensity={0.5} />
        //                 <directionalLight position={[10, 10, 5]} />
        //                 <Text font={'bebas'} fontSize={3} color="#fff">
        //                     MA
        //                 </Text>
        //             </RenderTexture>
        //         </meshStandardMaterial>
        //     </mesh>
        // </Select>



export default Cube