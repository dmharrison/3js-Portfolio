import {Suspense, useState} from 'react'
import { Canvas} from '@react-three/fiber'

import Loader from '../components/Loader'
import Ship from '../models/ship'
import Galaxy from '../models/Galaxy'
import Balloon from '../models/Balloon'



{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>POPUP</div> */}



const Home = () => {
  const [isRotating, setIsRotating] = useState(false)
  
  const adjustShipWreckForScreenSize =()=>{
    let screenScale=null; 
    let screenPosition=[-30,-15,-250];
    let rotation =[0.1, 1,0]

    if(window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9];
      
    }else{
      screenScale = [1, 1, 1];
     
    }
    return [screenScale,screenPosition,rotation];
  }
  const adjustBalloonForScreenSize =()=>{
    let screenScale,screenPosition;
    

    if(window.innerWidth < 768){
      screenScale = [1.5, 1.5, 1.5];
      screenPosition =[0,-1.5,0]
      
    }else{
      screenScale = [3, 3, 3];
      screenPosition=[0,-4,-4]
     
    }
    return [screenScale,screenPosition];
  }
  const [shipWreckScale, shipWreckPosition, shipWreckRotation] = adjustShipWreckForScreenSize();
  const [balloonScale, balloonPosition] = adjustBalloonForScreenSize();

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
       
       <Galaxy />
       
        <Ship 
        position={shipWreckPosition}
        scale={shipWreckScale}
        rotation={shipWreckRotation}
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        />
        <Balloon
        isRotating={isRotating}
        balloonScale={balloonScale}
        balloonPosition={balloonPosition}
        rotation={[0,20,0]}

        />
      </Suspense>
      </Canvas>

    </section>
  )
}

export default Home