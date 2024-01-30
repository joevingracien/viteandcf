import { Canvas } from "@react-three/fiber";

export default function App() {
  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
      <h1>HELLO</h1>
    </div>
  );
}
