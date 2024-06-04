import {useEffect, useRef} from 'react'

import balloonScene from '../assets/3d/balloon.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Balloon = ({isRotating, ...props}) => {
    const ref= useRef();
    const {scene, animations}= useGLTF(balloonScene)
    const {actions} = useAnimations(animations, ref)

    useEffect(()=>{
        if(isRotating){
            actions['Animation'].play();
        } else{
            actions['Animation'].stop();
        }
    },[actions, isRotating])
  return (
    <mesh {...props}  ref={ref}>
        <primitive object={scene} scale={[0.05, 0.05, 0.05]} />
    </mesh>
  )
}

export default Balloon