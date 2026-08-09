import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

// Drives the camera through the scene depth as the page scrolls, with a
// gentle parallax offset that follows the pointer for a "console" feel.
export default function CameraRig({ progressRef }) {
  const { camera } = useThree();
  const pointer = useRef({ x: 0, y: 0 });
  const smoothed = useRef({ x: 0, y: 0, z: 6 });

  useFrame((state) => {
    const progress = progressRef?.current ?? 0;
    const targetZ = 6 - progress * 30; // dolly forward through the field

    pointer.current.x = state.pointer.x;
    pointer.current.y = state.pointer.y;

    smoothed.current.z += (targetZ - smoothed.current.z) * 0.06;
    smoothed.current.x += (pointer.current.x * 0.6 - smoothed.current.x) * 0.04;
    smoothed.current.y += (pointer.current.y * 0.35 - smoothed.current.y) * 0.04;

    camera.position.z = smoothed.current.z;
    camera.position.x = smoothed.current.x;
    camera.position.y = smoothed.current.y;
    camera.lookAt(0, 0, smoothed.current.z - 8);
  });

  return null;
}
