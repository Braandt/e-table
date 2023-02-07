import { Text3D } from '@react-three/drei'

export default function Symbol({ symbol, fontColor, fontHeight }) {

    return <>
        <mesh
            position={[-0.4, 0, 0.12]}
        >
            <Text3D
                material={fontColor}
                castShadow
                rotation-x={-Math.PI / 2}
                font="./fonts/Verdana_Bold.json"
                size={0.3}
                height={fontHeight}
                curveSegments={3}
            >
                {symbol}
            </Text3D>
        </mesh>
    </>
}