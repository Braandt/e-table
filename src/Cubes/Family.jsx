import { Center, Text3D } from '@react-three/drei'

export default function Family({ family, fontColor, fontHeight }) {

    return <>
        <Center left top position={[0.46, 0, 0.37]} >

            <Text3D
                material={fontColor}
                castShadow
                rotation-x={-Math.PI / 2}
                font="./fonts/Verdana_Bold Italic.json"
                size={0.15}
                height={fontHeight}
                curveSegments={3}
            >
                {family}
            </Text3D>
        </Center>

    </>
}