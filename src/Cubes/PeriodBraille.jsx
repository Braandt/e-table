import { Text3D } from "@react-three/drei"

export default function PeriodBraille({ period, fontColor, fontHeight }) {
    return <>
        <Text3D
            font='fonts/Braille_Regular.json'
            material={fontColor}
            castShadow
            position={[-0.5, -0.5, -0.2]}
            rotation-y={-Math.PI / 2}
            size={0.21}
            height={fontHeight}
            curveSegments={3}
            bevelEnabled
            bevelSize={0.01}
            bevelThickness={0.02}
            bevelSegments={1}
        >
            {period}
        </Text3D>
    </>
}