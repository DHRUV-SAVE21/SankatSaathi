import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Galaxy = ({
    count = 2000,
    radius = 20,
    branches = 3,
    spin = 1,
    randomness = 0.2,
    randomnessPower = 3,
    insideColor = '#ff6030',
    outsideColor = '#1b3984',
    mouseInteraction = true
}) => {
    const points = useRef();

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        const colorInside = new THREE.Color(insideColor);
        const colorOutside = new THREE.Color(outsideColor);

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            // Position
            const r = Math.random() * radius;
            const spinAngle = r * spin;
            const branchAngle = (i % branches) / branches * Math.PI * 2;

            const randomX = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;
            const randomY = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;
            const randomZ = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;

            positions[i3] = Math.cos(branchAngle + spinAngle) * r + randomX;
            positions[i3 + 1] = randomY;
            positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + randomZ;

            // Color
            const mixedColor = colorInside.clone();
            mixedColor.lerp(colorOutside, r / radius);

            colors[i3] = mixedColor.r;
            colors[i3 + 1] = mixedColor.g;
            colors[i3 + 2] = mixedColor.b;
        }

        return { positions, colors };
    }, [count, radius, branches, spin, randomness, randomnessPower, insideColor, outsideColor]);

    useFrame((state, delta) => {
        if (points.current) {
            // Rotation
            points.current.rotation.y += delta * 0.05;

            // Mouse Interaction (Tilt)
            if (mouseInteraction) {
                const mouseX = (state.mouse.x * Math.PI) / 10;
                const mouseY = (state.mouse.y * Math.PI) / 10;
                points.current.rotation.x = -mouseY;
                points.current.rotation.z = mouseX;
            }
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.positions.length / 3}
                    array={particles.positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={particles.colors.length / 3}
                    array={particles.colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.15}
                sizeAttenuation={true}
                depthWrite={false}
                vertexColors={true}
                blending={THREE.AdditiveBlending}
                transparent={true}
                opacity={0.8}
            />
        </points>
    );
};

// Canvas Wrapper to easy integration
import { Canvas } from '@react-three/fiber';

const GalaxyCanvas = (props) => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
            <Canvas camera={{ position: [0, 5, 10], fov: 45 }}>
                <color attach="background" args={['#000000']} />
                <Galaxy {...props} />
            </Canvas>
        </div>
    );
};

export default GalaxyCanvas;
