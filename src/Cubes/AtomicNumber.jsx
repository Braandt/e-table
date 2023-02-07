import { Center, Text3D } from '@react-three/drei'

export default function AtomicNumber({ atomicNumber, fontColor, fontHeight }) {

    return <>
        <Center left top position={[0.44, 0, -0.37]} >
            <Text3D
                material={fontColor}
                castShadow
                rotation-x={-Math.PI / 2}
                font="./fonts/Verdana_Bold Italic.json"
                size={0.15}
                height={fontHeight}
                curveSegments={3}
            >
                {atomicNumber}
            </Text3D>
        </Center>


    </>

}