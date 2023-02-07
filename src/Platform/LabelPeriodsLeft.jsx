import { Center, Text3D } from '@react-three/drei'
import { BoxBlendGeometry } from '../01-geometriesAndColors'

export default function PeriodsLeft({ labelThickness, radius, height, fontSizeBraille, colors, fontSize }) {

    const spacing = 1.1

    return <>
        <mesh
            rotation-x={-Math.PI / 2}
            position={[0.2, labelThickness / 2, 4.4]}
            material={colors[5]}
            castShadow
            receiveShadow
        >
            <BoxBlendGeometry width={0.5} height={7.6} depth={labelThickness} radius={radius} />
            <Center front position={[0, 0.2, labelThickness / 2]}>
                <Text3D
                    material={colors[1]}
                    position={[0, 0, 0]}
                    font='./fonts/Verdana_Bold.json'
                    size={fontSize}
                    height={height}
                >
                    1
                </Text3D>
                <Text3D
                    material={colors[1]}
                    position={[0, -1 * spacing, 0]}
                    font='./fonts/Verdana_Bold.json'
                    size={fontSize}
                    height={height}
                >
                    2
                </Text3D>
                <Text3D
                    material={colors[1]}
                    position={[0, -2 * spacing, 0]}
                    font='./fonts/Verdana_Bold.json'
                    size={fontSize}
                    height={height}
                >
                    3
                </Text3D>
                <Text3D
                    material={colors[1]}
                    position={[0, -3 * spacing, 0]}
                    font='./fonts/Verdana_Bold.json'
                    size={fontSize}
                    height={height}
                >
                    4
                </Text3D>
                <Text3D
                    material={colors[1]}
                    position={[0, -4 * spacing, 0]}
                    font='./fonts/Verdana_Bold.json'
                    size={fontSize}
                    height={height}
                >
                    5
                </Text3D>
                <Text3D
                    material={colors[1]}
                    position={[0, -5 * spacing, 0]}
                    font='./fonts/Verdana_Bold.json'
                    size={fontSize}
                    height={height}
                >
                    6
                </Text3D>
                <Text3D
                    material={colors[1]}
                    position={[0, -6 * spacing, 0]}
                    font='./fonts/Verdana_Bold.json'
                    size={fontSize}
                    height={height}
                >
                    7
                </Text3D>
            </Center>

            <Center front position={[0, -0.2, labelThickness / 2]}>
                <Text3D
                    material={colors[1]}
                    position={[0, 0, 0]}
                    font='./fonts/Braille_Regular.json'
                    size={fontSizeBraille}
                    height={height}
                >
                    1
                </Text3D>
                <Text3D
                    material={colors[1]}
                    position={[0, -1 * spacing, 0]}
                    font='./fonts/Braille_Regular.json'
                    size={fontSizeBraille}
                    height={height}
                >
                    2
                </Text3D>
                <Text3D
                    material={colors[1]}
                    position={[0, -2 * spacing, 0]}
                    font='./fonts/Braille_Regular.json'
                    size={fontSizeBraille}
                    height={height}
                >
                    3
                </Text3D>
                <Text3D
                    material={colors[1]}
                    position={[0, -3 * spacing, 0]}
                    font='./fonts/Braille_Regular.json'
                    size={fontSizeBraille}
                    height={height}
                >
                    4
                </Text3D>
                <Text3D
                    material={colors[1]}
                    position={[0, -4 * spacing, 0]}
                    font='./fonts/Braille_Regular.json'
                    size={fontSizeBraille}
                    height={height}
                >
                    5
                </Text3D>
                <Text3D
                    material={colors[1]}
                    position={[0, -5 * spacing, 0]}
                    font='./fonts/Braille_Regular.json'
                    size={fontSizeBraille}
                    height={height}
                >
                    6
                </Text3D>
                <Text3D
                    material={colors[1]}
                    position={[0, -6 * spacing, 0]}
                    font='./fonts/Braille_Regular.json'
                    size={fontSizeBraille}
                    height={height}
                >
                    7
                </Text3D>
            </Center>
        </mesh>
    </>
}