import { Center, Text3D } from '@react-three/drei'
import { BoxBlendGeometry } from '../01-geometriesAndColors'

export default function Family3_12({ labelThickness, radius, height, colors, fontSize }) {

    const spacing = 5

    return <>
        <mesh
            rotation-x={-Math.PI / 2}
            position={[8.25, labelThickness / 2, 3.5]}
            material={colors[5]}
            castShadow
            receiveShadow
        >
            <BoxBlendGeometry width={10.9} height={0.5} depth={labelThickness} radius={radius} />
            <Text3D
                material={colors[1]}
                position={[-5.1, -0.15, 0.05]}
                font="./fonts/Verdana_Bold.json"
                size={fontSize}
                height={height}
            >
                3      4     5      6      7     8      9    10    11   12
            </Text3D>
        </mesh>
    </>
}