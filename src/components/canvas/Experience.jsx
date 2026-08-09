import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import NetworkField from "./NetworkField";
import FloatingShapes from "./FloatingShapes";
import CameraRig from "./CameraRig";

export default function Experience({ progressRef }) {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55, near: 0.1, far: 100 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={["#131a26"]} />
        <fog attach="fog" args={["#131a26", 8, 30]} />
        <ambientLight intensity={0.4} />
        <Stars radius={60} depth={30} count={1200} factor={2} saturation={0} fade speed={0.4} />
        <NetworkField progressRef={progressRef} />
        <FloatingShapes />
        <CameraRig progressRef={progressRef} />
      </Canvas>
    </div>
  );
}
