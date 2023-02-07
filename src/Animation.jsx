import { useEffect, useState } from "react"
import { Vector3 } from "three"
import { useFrame } from '@react-three/fiber'

export default function Animation() {
    let y = 0

    const MyCameraControls = () => {

        const [started, setStarted] = useState(false)
        const vec = new Vector3()

        useEffect(() => {
            setStarted(true)
        })

        useFrame(state => {
            if (started) {
                if (y < 0.15) {
                    y += ((1 - y) / 5) * 0.005
                }
                state.camera.lookAt(0, y, 0);
                // state.camera.position.set(-1.2, 1.5, 2.5)
            } return null
        })
        return null
    }

    MyCameraControls()
}
