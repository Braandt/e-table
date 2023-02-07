import { Center, Text3D } from '@react-three/drei'
import { BoxBlendGeometry } from '../01-geometriesAndColors'

export default function Family4_18Braille({ labelThickness, radius, height, fontSizeBraille, colors }) {
    return <>
        <mesh
            rotation-x={-Math.PI / 2}
            position={[12.1, labelThickness, 7.47]}
            material={colors[5]}
            castShadow
            receiveShadow
        >
            <BoxBlendGeometry width={16.4} height={0.5} depth={labelThickness} radius={radius} />
            <Text3D
                material={colors[1]}
                position={[-7.8, -0.15, 0.05]}
                font="./fonts/Braille_Regular.json"
                size={fontSizeBraille}
                height={height}
            >
                4      5     6     7     8      9     1j    1a   1b    1c    1d    1e    1f   1g   1h
            </Text3D>
        </mesh>
    </>
}