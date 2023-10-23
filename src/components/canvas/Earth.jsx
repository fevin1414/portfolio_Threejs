import React, { Suspense } from "react";
import { Canvas} from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={0.3} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        {/* Point light at the center of the model */}
        <pointLight
          position={[0, 0, 0]}   // Position of the light at the center
          intensity={10}          // Intensity of the light
          distance={10}           // Maximum range of the light
          decay={2}              // Drop off of the light intensity over distance
        />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
