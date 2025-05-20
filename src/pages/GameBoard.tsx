import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Plane from "../components/threejs_Assets/Plane"

export default function GameBoard() {
    return (
        <>
            <div>GAME BOARD</div>
            <div id="canvas-container">
                <Canvas >
                    <Plane />
                    <ambientLight intensity={0.1} />
                    <directionalLight position={[0, 0, 5]} color="red" />
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
}
