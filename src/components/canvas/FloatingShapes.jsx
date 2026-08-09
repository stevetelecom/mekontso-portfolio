import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SHAPES = [
  { geo: "icosahedron", pos: [-3.2, 1.4, -6], scale: 0.9, speed: 0.4 },
  { geo: "octahedron", pos: [3.6, -0.8, -10], scale: 1.1, speed: 0.3 },
  { geo: "torus", pos: [-2.4, -1.6, -14], scale: 0.8, speed: 0.5 },
  { geo: "icosahedron", pos: [2.8, 1.8, -18], scale: 1.3, speed: 0.35 },
  { geo: "octahedron", pos: [-3.8, 0.6, -22], scale: 0.7, speed: 0.45 },
  { geo: "torus", pos: [3.2, -1.2, -26], scale: 1, speed: 0.3 },
];

function Shape({ def }) {
  const ref = useRef();
  const geometry = useMemo(() => {
    switch (def.geo) {
      case "icosahedron":
        return new THREE.IcosahedronGeometry(1, 0);
      case "octahedron":
        return new THREE.OctahedronGeometry(1, 0);
      case "torus":
        return new THREE.TorusGeometry(0.8, 0.28, 8, 24);
      default:
        return new THREE.IcosahedronGeometry(1, 0);
    }
  }, [def.geo]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * def.speed * 0.4;
    ref.current.rotation.y = t * def.speed;
    ref.current.position.y = def.pos[1] + Math.sin(t * def.speed + def.pos[0]) * 0.3;
  });

  return (
    <mesh ref={ref} position={def.pos} scale={def.scale} geometry={geometry}>
      <meshBasicMaterial color="#e8edf4" wireframe transparent opacity={0.18} />
    </mesh>
  );
}

export default function FloatingShapes() {
  return (
    <group>
      {SHAPES.map((def, i) => (
        <Shape key={i} def={def} />
      ))}
    </group>
  );
}
