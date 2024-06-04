import {Suspense, useState} from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Loader from '../components/Loader'
import Ship from '../models/ship'



{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>POPUP</div> */}



const Home = () => {
  const [isRotating, setIsRotating] = useState(false)
  
  const adjustShipWreckForScreenSize =()=>{
    let screenScale=null; 
    let screenPosition=[-30,-65,-350];
    let rotation =[0.1, 4.7,0]

    if(window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9];
      
    }else{
      screenScale = [1, 1, 1];
     
    }
    return [screenScale,screenPosition,rotation];
  }
  const [shipWreckScale, shipWreckPosition, shipWreckRotation] = adjustShipWreckForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <Canvas 
        className={`w-full h-screen bg-transparent" ${isRotating ? 'cursor-grabbing' :'cursor-grab'}`}
        camera={{near:0.1, far:1000}}
        >
      <Suspense fallback={<Loader />}>
        <directionalLight positon={[1,1,1]} intensity={2}/>
        <ambientLight intensity={1}/>
        <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' />
        <Ship position={shipWreckPosition}
        scale={shipWreckScale}
        rotation={shipWreckRotation}
        isRotating={isRotating}
        setIsRotating={setIsRotating}

        />
        <OrbitControls enableZoom={true} enablePan={false} />
      </Suspense>
      </Canvas>

    </section>
  )
}

export default Home