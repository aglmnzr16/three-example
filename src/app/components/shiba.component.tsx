import { Canvas } from "@react-three/fiber";
import MesComponent from "./mesh-component.component";
import { OrbitControls } from "@react-three/drei";

export default function Shiba() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Canvas className="h-2xl w-2xl">
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <MesComponent />
      </Canvas>
    </div>
  );
}
