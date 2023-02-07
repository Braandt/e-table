import { Center, Text3D } from '@react-three/drei'
import { BoxBlendGeometry } from '../01-geometriesAndColors'

export default function Family1_2Braille({ labelThickness, radius, height, fontSizeBraille, colors }) {
    return <>
        <mesh
            rotation-x={-Math.PI / 2}
            position={[1.65, labelThickness / 2, 8.55]}
            material={colors[5]}
            castShadow
            receiveShadow
        >
            <BoxBlendGeometry width={2.1} height={0.5} depth={labelThickness} radius={radius} />
            <Center
                front
                position-z={labelThickness / 2}
            >
                <Text3D
                    material={colors[1]}
                    font='./fonts/Braille_Regular.json'
                    size={fontSizeBraille}
                    letterSpacing={0.8}
                    height={height}
                >
                    12
                </Text3D>
            </Center>
        </mesh>
    </>
}