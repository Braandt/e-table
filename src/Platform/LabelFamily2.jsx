import { Center, Text3D } from '@react-three/drei'
import { BoxBlendGeometry } from '../01-geometriesAndColors'

export default function Family2({ labelThickness, radius, height, colors, fontSize }) {
    return <>
        <mesh
            position={[2.2, labelThickness / 2, 1.3]}
            rotation-x={-Math.PI / 2}
            material={colors[5]}
            castShadow
            receiveShadow
        >
            <BoxBlendGeometry width={1} height={0.5} depth={labelThickness} radius={radius} />
            <Center
                front
                position-z={labelThickness / 2}
            >
                <Text3D
                    font="./fonts/Verdana_Bold.json"
                    size={fontSize}
                    height={height}
                    material={colors[1]}
                >
                    2
                </Text3D>
            </Center>
        </mesh>
    </>
}