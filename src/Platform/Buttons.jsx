import { Text3D } from "@react-three/drei";
import { BoxBlendGeometry } from "../01-geometriesAndColors";
import Colors from '../01-geometriesAndColors/Colors.jsx'

export default function Buttons() {

    const baseHeight = 0.1
    const size = 0.7
    const radius = 0.1
    const symbolHeight = 0.03
    const symbolPositionY = baseHeight / 2 + symbolHeight / 2

    return <>
        <mesh position-x={4}>
            <mesh
                position={[10, baseHeight / 2, 8.5]}
                rotation-x={-Math.PI / 2}
                material={Colors[5]}
                // castShadow
                receiveShadow
            >
                <BoxBlendGeometry width={size} height={size} depth={baseHeight} radius={radius} />
                <mesh position-z={symbolPositionY}>
                    <boxGeometry args={[0.5, 0.07, symbolHeight]} />
                </mesh>
                <mesh rotation-z={Math.PI / 2} position-z={symbolPositionY}>
                    <boxGeometry args={[0.5, 0.07, symbolHeight]} />
                </mesh>
            </mesh>

            <mesh
                position={[10.8, baseHeight / 2, 8.5]}
                rotation-x={-Math.PI / 2}
                material={Colors[5]}
                // castShadow
                receiveShadow
            >
                <BoxBlendGeometry width={size} height={size} depth={baseHeight} radius={radius} />
                <mesh position-z={symbolPositionY}>
                    <boxGeometry args={[0.5, 0.07, symbolHeight]} />
                </mesh>
            </mesh>

            <mesh
                position={[11.8, baseHeight / 2, 8.5]}
                rotation-x={-Math.PI / 2}
                material={Colors[5]}
                // castShadow
                receiveShadow
            >
                <BoxBlendGeometry width={size} height={size} depth={baseHeight} radius={radius} />
                <mesh position={[-0.08, 0, symbolPositionY]} rotation-z={Math.PI / 2} >
                    <boxGeometry args={[0.3, 0.07, symbolHeight]} />
                </mesh>
                <mesh position={[0.08, 0, symbolPositionY]} rotation-z={Math.PI / 2} >
                    <boxGeometry args={[0.3, 0.07, symbolHeight]} />
                </mesh>
            </mesh>

            <mesh
                position={[12.8, baseHeight / 2, 8.5]}
                rotation-x={-Math.PI / 2}
                material={Colors[5]}
                // castShadow
                receiveShadow
            >
                <BoxBlendGeometry width={size} height={size} depth={baseHeight} radius={radius} />
                <mesh position-z={symbolPositionY}>
                    <BoxBlendGeometry width={0.35} height={0.35} depth={symbolHeight} radius={0.05} />
                </mesh>
            </mesh>

            <mesh
                position={[13.8, baseHeight / 2, 8.5]}
                rotation-x={-Math.PI / 2}
                material={Colors[5]}
                // castShadow
                receiveShadow
            >
                <BoxBlendGeometry width={size} height={size} depth={baseHeight} radius={radius} />
                <Text3D
                    font='./fonts/Noto_Sans_TC_Regular.json'
                >
                    AAAAAA
                </Text3D>
            </mesh>
        </mesh>
    </>
}