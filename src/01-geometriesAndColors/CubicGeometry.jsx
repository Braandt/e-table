import * as CSG from '@react-three/csg'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import { Center } from '@react-three/drei'

export default function CubeGeometry(material) {

    const cube = new RoundedBoxGeometry(1, 1, 1, 1, 0.02)

    return <>
        <mesh castShadow receiveShadow material={material}>
            <CSG.Geometry>
                <Center bottom>
                    <CSG.Base geometry={cube} />
                </Center>

                <Center bottom position={[-0.5, 0, -0.5]}>
                    <CSG.Subtraction
                        rotation-y={Math.PI / 4}
                        scale={[0.32, 0.1, 0.32]}
                    >
                        <boxGeometry />
                    </CSG.Subtraction>
                </Center>
            </CSG.Geometry>
        </mesh>
    </>
}