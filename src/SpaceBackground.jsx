import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const SpaceBackground = () => {
  return (
    <Canvas style={{ position: "absolute", top: 0, left: 0 }}>
      <Stars />
    </Canvas>
  );
};

export default SpaceBackground;
