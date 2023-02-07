import { Center, Text3D } from "@react-three/drei";
import { BoxBlendGeometry } from "../01-geometriesAndColors";

export default function Family1({ labelThickness, colors, radius, height, fontSize }) {

    return <>
        <mesh
            position={[1.1, labelThickness / 2, 0.2]}
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
                    material={colors[1]}
                    font="./fonts/Verdana_Bold.json"
                    size={fontSize}
                    height={height}
                >
                    1
                </Text3D>
            </Center>
        </mesh>
    </>
}