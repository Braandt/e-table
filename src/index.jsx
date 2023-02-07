import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    < Canvas
        gl={{ preserveDrawingBuffer: true }}
        shadows
        camera={{
            fov: 10,
            near: 0.1,
            far: 200,
            position: [-0.8, 2, 2.5],
            // position: [0, 1, 0],
        }}
    >
        <color args={['#191919']} attach="background" />

        <Experience />
    </Canvas >
)