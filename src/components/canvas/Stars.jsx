import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const StarField = ({ color, count, size }) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(count * 3), { radius: 1.2 }));

  useFrame((_, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial transparent color={color} size={size} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const reduceMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        frameloop={reduceMotion ? "demand" : "always"}
      >
        <StarField color="#f272c8" count={1700} size={0.002} />
        <StarField color="#00F0FF" count={900} size={0.0025} />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
