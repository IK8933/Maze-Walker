import { useRef } from 'react';
import { Mesh } from 'three';
// import { Mesh, PlaneGeometry, MeshBasicMaterial } from 'three';
import { useFrame } from '@react-three/fiber';
// import { useFrame, useThree } from '@react-three/fiber';

interface PlaneProps {
    width?: number;
    height?: number;
    color?: string;
    position?: [number, number, number];
    rotation?: [number, number, number];
}

const Plane: React.FC<PlaneProps> = ({
    width = 1,
    height = 1,
    color = 'white',
    position = [0, 0, 0],
    rotation = [0, 0, 0],
}) => {
    const meshRef = useRef<Mesh>(null);
    // const { scene } = useThree();

    useFrame(() => {
        if (meshRef.current) {
            // Example: Rotate the plane on each frame
            // meshRef.current.rotation.x += 0.01;
        }
    });

    return (
        <mesh ref={meshRef} position={position} rotation={rotation}>
            <planeGeometry args={[width, height]} />
            <meshBasicMaterial color={color} side={2} />
        </mesh>
    );
};

export default Plane;