import { Text3D } from "@react-three/drei";

export default function SymbolBraille({ symbol, fontColor, fontHeight }) {
    return <>
        <Text3D
            font='fonts/Braille_Regular.json'
            material={fontColor}
            castShadow
            position={[-0.2, -0.5, 0.5]}
            size={0.21}
            height={fontHeight}
            curveSegments={3}
            bevelEnabled
            bevelSize={0.01}
            bevelThickness={0.02}
            bevelSegments={1}
        >
            {symbol}
        </Text3D>
    </>
}