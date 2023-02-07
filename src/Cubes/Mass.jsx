import { Text3D } from '@react-three/drei'

export default function Mass({ mass, fontColor, fontHeight }) {

    return <>
        <Text3D
            material={fontColor}
            castShadow
            position={[-0.44, 0, 0.44]}
            rotation-x={-Math.PI / 2}
            font="./fonts/Verdana_Bold Italic.json"
            size={0.15}
            height={fontHeight}
            curveSegments={3}
        >
            {mass}
        </Text3D></>

}