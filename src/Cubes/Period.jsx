import { Center, Text3D } from '@react-three/drei'

export default function Period({ period, fontColor, fontHeight }) {

    return <>

        <Center left top position={[0.46, 0, 0.18]} >
            <Text3D
                material={fontColor}
                castShadow
                rotation-x={-Math.PI / 2}
                font="./fonts/Verdana_Bold Italic.json"
                size={0.15}
                height={fontHeight}
                curveSegments={3}
            >
                {period}
            </Text3D>
        </Center>
    </>

}