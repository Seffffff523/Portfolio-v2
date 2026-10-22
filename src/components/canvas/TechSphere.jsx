import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { technologies } from "../../constants";

const RADIUS = 2.1;

// Spread points evenly over a sphere (Fibonacci lattice).
const fibonacciSphere = (n, r) =>
  Array.from({ length: n }, (_, i) => {
    const y = 1 - (i / (n - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = Math.PI * (3 - Math.sqrt(5)) * i;
    return new THREE.Vector3(Math.cos(theta) * radius * r, y * r, Math.sin(theta) * radius * r);
  });

const Label = ({ position, tech }) => {
  const group = useRef();
  const label = useRef();
  const world = useMemo(() => new THREE.Vector3(), []);

  // Dim labels on the far side of the sphere.
  useFrame(() => {
    if (!group.current || !label.current) return;
    group.current.getWorldPosition(world);
    const t = (world.z / RADIUS + 1) / 2; // 0 = back, 1 = front
    label.current.style.opacity = (0.2 + t * 0.8).toFixed(2);
  });

  return (
    <group ref={group} position={position}>
      <Html center distanceFactor={7} zIndexRange={[10, 0]}>
        <span
          ref={label}
          className="whitespace-nowrap rounded-full border border-white/10 bg-tertiary/80 px-3 py-1 text-[13px] font-semibold text-white backdrop-blur-sm"
          style={{ boxShadow: `0 0 14px ${tech.color}55`, borderColor: `${tech.color}66` }}
        >
          {tech.name}
        </span>
      </Html>
      <mesh>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color={tech.color} />
      </mesh>
    </group>
  );
};

const Globe = () => {
  const group = useRef();
  const points = useMemo(() => fibonacciSphere(technologies.length, RADIUS), []);

  useFrame((_, delta) => {
    group.current.rotation.y += delta * 0.25;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <group ref={group}>
        <mesh>
          <icosahedronGeometry args={[RADIUS * 0.82, 1]} />
          <meshBasicMaterial color="#915eff" wireframe transparent opacity={0.25} />
        </mesh>
        <mesh>
          <sphereGeometry args={[RADIUS * 0.55, 32, 32]} />
          <meshStandardMaterial color="#00F0FF" emissive="#7000FF" emissiveIntensity={0.6} transparent opacity={0.18} />
        </mesh>
        {technologies.map((tech, i) => (
          <Label key={tech.name} tech={tech} position={points[i]} />
        ))}
      </group>
    </Float>
  );
};

const TechSphere = () => (
  <Canvas camera={{ position: [0, 0, 6.5], fov: 50 }} dpr={[1, 1.5]}>
    <ambientLight intensity={0.8} />
    <pointLight position={[5, 5, 5]} intensity={40} color="#00F0FF" />
    <Globe />
    <OrbitControls enableZoom={false} enablePan={false} />
  </Canvas>
);

export default TechSphere;
