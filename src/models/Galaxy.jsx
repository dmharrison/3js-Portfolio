import { useGLTF } from '@react-three/drei'
import {useRef} from 'react'
import { useFrame } from '@react-three/fiber'

import galaxyScene from '../assets/3d/galaxy.glb' 

const Galaxy = ({isRotating}) => {
    const galaxy = useGLTF(galaxyScene)
    const galaxyRef = useRef();

    useFrame((_,delta)=>{
        if(isRotating){
            galaxyRef.current.rotation.y +=.25 * delta
        }
    })


  return (
    <mesh ref={galaxyRef}>
        <primitive object={galaxy.scene} />
    </mesh>
  )
}

export default Galaxy