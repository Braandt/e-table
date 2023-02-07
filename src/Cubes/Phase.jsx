import { Text3D } from '@react-three/drei'

export default function Phase({ phase, fontColor, fontHeight }) {

    return <>

        <Text3D
            material={fontColor}
            castShadow
            position={[-0.32, 0, -0.3]}
            rotation-x={-Math.PI / 2}
            font="./fonts/Verdana_Regular.json"
            size={0.15}
            height={fontHeight}
            curveSegments={3}
        >
            {phase}
        </Text3D>
    </>
}