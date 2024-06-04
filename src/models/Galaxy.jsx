import { useGLTF } from '@react-three/drei'
import React from 'react'

import galaxyScene from '../assets/3d/galaxy.glb' 

const Galaxy = () => {
    const galaxy = useGLTF(galaxyScene)
  return (
    <mesh>
        <primitive object={galaxy.scene} />
    </mesh>
  )
}

export default Galaxy