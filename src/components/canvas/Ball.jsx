import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../Loader";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

const Square = (props) => {
  const texture = useTexture(props.imgUrl);

  return (
    <group>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 5, 0]} intensity={0.5} />
      <pointLight position={[0, -2.5, 0]} intensity={1.5} distance={3} decay={2} color="#fff8eb" />

      <mesh castShadow receiveShadow scale={2.75}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          map={texture}
          emissive="#fff8eb"  // Glow color
          emissiveIntensity={0.5} // Glow intensity
          emissiveMap={texture}  // Use the texture as an emissive map. It will glow in transparent parts.
        />
      </mesh>
    </group>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Square imgUrl={icon} />

        <EffectComposer>
          <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.8} intensity={1.2} />
        </EffectComposer>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
