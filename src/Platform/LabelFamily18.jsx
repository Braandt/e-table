import { Center, Text3D } from '@react-three/drei'
import { BoxBlendGeometry } from '../01-geometriesAndColors'

export default function Family18({ labelThickness, radius, height, colors, fontSize }) {
    return <>
        <mesh
            rotation-x={-Math.PI / 2}
            position={[19.8, labelThickness / 2, 0.2]}
            material={colors[5]}
            castShadow
            receiveShadow
        >
            <BoxBlendGeometry width={1} height={0.5} depth={labelThickness} radius={radius} />

            <Center
                front
                position-z={height}
            >
                <Text3D
                    material={colors[1]}
                    font="./fonts/Verdana_Bold.json"
                    size={fontSize}
                    height={height}
                >
                    18
                </Text3D>
            </Center>
        </mesh>
    </>
}