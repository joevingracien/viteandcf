import { Canvas } from "@react-three/fiber";

export default function Index() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
      </Canvas>
      <h1>BRO</h1>
    </>
  );
}
