import { Text3D } from "@react-three/drei";

export default function GuideTextBraille() {

    const fontSize = 0.15
    const fontHeight = 0.03
    const baseThickness = 0.1

    return <>
        <Text3D
            font='./fonts/Braille_Regular.json'
            position={[0.8, 1, baseThickness]}
            size={fontSize}
            height={fontHeight}
        >
            número atômico
        </Text3D>

        <Text3D
            font='./fonts/Braille_Regular.json'
            position={[0.2, 0.1, baseThickness]}
            size={fontSize}
            height={fontHeight}
        >
            massa
        </Text3D>

        <Text3D
            font='./fonts/Braille_Regular.json'
            position={[2.1, 0.3, baseThickness]}
            size={fontSize}
            height={fontHeight}
        >
            família
        </Text3D>

        <Text3D
            font='./fonts/Braille_Regular.json'
            position={[2.1, -0.1, baseThickness]}
            size={fontSize}
            height={fontHeight}
        >
            período
        </Text3D>

        <Text3D
            font='./fonts/Braille_Regular.json'
            position={[1, -0.5, baseThickness]}
            size={fontSize}
            height={fontHeight}
        >
            elemento
        </Text3D>

        <Text3D
            font='./fonts/Braille_Regular.json'
            position={[0.5, -0.8, baseThickness]}
            size={fontSize}
            height={fontHeight}
        >
            sólido
        </Text3D>

        <Text3D
            font='./fonts/Braille_Regular.json'
            position={[0.5, -1.1, baseThickness]}
            size={fontSize}
            height={fontHeight}
        >
            líquido
        </Text3D>

        <Text3D
            font='./fonts/Braille_Regular.json'
            position={[2, -1.1, baseThickness]}
            size={fontSize}
            height={fontHeight}
        >
            gasoso
        </Text3D>

    </>
}