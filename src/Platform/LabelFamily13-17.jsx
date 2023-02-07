import { Center, Text3D } from '@react-three/drei'
import { BoxBlendGeometry } from '../01-geometriesAndColors'

export default function Family13_17({ labelThickness, radius, height, colors, fontSize }) {
    return <>
        <mesh
            rotation-x={-Math.PI / 2}
            position={[16.5, labelThickness / 2, 1.3]}
            material={colors[5]}
            castShadow
            receiveShadow
        >
            <BoxBlendGeometry width={5.4} height={0.5} depth={labelThickness} radius={radius} />
            <Text3D
                material={colors[1]}
                position={[-2.5, -0.15, 0.05]}
                font="./fonts/Verdana_Bold.json"
                size={fontSize}
                height={height}
            >
                13   14   15    16    17
            </Text3D>
        </mesh>
    </>
}