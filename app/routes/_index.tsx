import { Canvas } from "@react-three/fiber";

export default function Index() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
      <h1>HELLO CF VITE REMIX R3F</h1>
    </div>
  );
}
