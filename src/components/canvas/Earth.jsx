import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const EarthCanvas = () => {
  return (
    <Canvas shadows frameloop='demand' gl={{ preserveDrawingBuffer: true }} camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}>
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls autoRotate={true} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');
  // eslint-disable-next-line react/no-unknown-property
  return <primitive object={earth.scene} scale={2.5} position-y={0} />
}