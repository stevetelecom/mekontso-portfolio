import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Colour states the network cycles through as scroll progress advances.
// index 0 = code zone, 1 = network zone, 2 = data zone
const ZONE_COLORS = [
  new THREE.Color("#35c3ff"), // cyan — code
  new THREE.Color("#f0a500"), // amber — network / security
  new THREE.Color("#7c6bff"), // violet — data / IA
];

const NODE_COUNT = 140;
const CONNECT_DIST = 2.6;
const FIELD_RADIUS = 9;

function generateNodes(count, radius) {
  const positions = new Float32Array(count * 3);
  const speeds = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    // distribute inside a flattened sphere so it reads as a "field" behind content
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
    positions[i * 3 + 2] = r * Math.cos(phi) - 4; // push field behind the camera start
    speeds[i] = 0.15 + Math.random() * 0.35;
  }
  return { positions, speeds };
}

export default function NetworkField({ progressRef }) {
  const pointsRef = useRef();
  const linesRef = useRef();
  const groupRef = useRef();

  const { positions, speeds } = useMemo(
    () => generateNodes(NODE_COUNT, FIELD_RADIUS),
    []
  );

  const basePositions = useMemo(() => positions.slice(), [positions]);

  // Pre-allocate a max-size line buffer; we only draw the first `lineCount * 2` vertices each frame.
  const maxLines = NODE_COUNT * 6;
  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const linePositions = new Float32Array(maxLines * 2 * 3);
    geo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    geo.setDrawRange(0, 0);
    return geo;
  }, [maxLines]);

  const pointGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  const tmpColor = useMemo(() => new THREE.Color(), []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const progress = progressRef?.current ?? 0; // 0..1 across whole page

    const posAttr = pointGeometry.attributes.position;
    const arr = posAttr.array;

    for (let i = 0; i < NODE_COUNT; i++) {
      const ix = i * 3;
      arr[ix] = basePositions[ix] + Math.sin(t * speeds[i] + i) * 0.18;
      arr[ix + 1] =
        basePositions[ix + 1] + Math.cos(t * speeds[i] * 0.8 + i) * 0.18;
      arr[ix + 2] = basePositions[ix + 2] + Math.sin(t * speeds[i] * 0.6 + i) * 0.18;
    }
    posAttr.needsUpdate = true;

    // Rebuild connections between nearby nodes (cheap at this node count)
    const linePos = lineGeometry.attributes.position.array;
    let lineCount = 0;
    for (let i = 0; i < NODE_COUNT && lineCount < maxLines; i++) {
      const ix = i * 3;
      for (let j = i + 1; j < NODE_COUNT && lineCount < maxLines; j++) {
        const jx = j * 3;
        const dx = arr[ix] - arr[jx];
        const dy = arr[ix + 1] - arr[jx + 1];
        const dz = arr[ix + 2] - arr[jx + 2];
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < CONNECT_DIST * CONNECT_DIST) {
          const base = lineCount * 6;
          linePos[base] = arr[ix];
          linePos[base + 1] = arr[ix + 1];
          linePos[base + 2] = arr[ix + 2];
          linePos[base + 3] = arr[jx];
          linePos[base + 4] = arr[jx + 1];
          linePos[base + 5] = arr[jx + 2];
          lineCount++;
        }
      }
    }
    lineGeometry.setDrawRange(0, lineCount * 2);
    lineGeometry.attributes.position.needsUpdate = true;

    // Colour lerp across the three "zones" based on scroll progress
    const zonePos = progress * (ZONE_COLORS.length - 1);
    const zi = Math.min(Math.floor(zonePos), ZONE_COLORS.length - 2);
    const f = zonePos - zi;
    tmpColor.copy(ZONE_COLORS[zi]).lerp(ZONE_COLORS[zi + 1], f);

    if (pointsRef.current) {
      pointsRef.current.material.color = tmpColor;
    }
    if (linesRef.current) {
      linesRef.current.material.color = tmpColor;
      linesRef.current.material.opacity = 0.22;
    }

    // Slow ambient rotation + subtle drift with scroll
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.02 + progress * 1.1;
      groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.05;
      groupRef.current.position.z = progress * 6;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef} geometry={pointGeometry}>
        <pointsMaterial
          size={0.06}
          sizeAttenuation
          color="#35c3ff"
          transparent
          opacity={0.9}
          depthWrite={false}
        />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial
          color="#35c3ff"
          transparent
          opacity={0.2}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}
