import * as CSG from '@react-three/csg'
import { Text3D } from '@react-three/drei';
import { BoxBlendGeometry } from "../01-geometriesAndColors";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { ExtrudeGeometry, Group, Mesh, MeshNormalMaterial } from 'three';
import Colors from "../01-geometriesAndColors/Colors";
import boltIcon from '../../public/bolt-solid.jsx'

const svgMarkup = boltIcon

export default function PowerPort() {

    const loader = new SVGLoader()
    const svgData = loader.parse(svgMarkup)

    const material = Colors[1]

    function SvgGroup() {
        let meshes = []

        svgData.paths.forEach((path, i) => {
            const shapes = path.toShapes(true)

            shapes.forEach((shape, j) => {
                const geometry = new ExtrudeGeometry(shape, {
                    depth: 1,
                    bevelEnabled: false,
                })
                meshes.push(<mesh geometry={geometry} material={material} key={meshes.length} ></mesh>)
            })

        })
        return <>
            <group children={meshes}></group>
        </>
    }

    const portPositionX = 0.6

    return <>
        <mesh
            position={[17, -0.225, -0.425]}
            castShadow
        >
            <CSG.Geometry useGroups>
                <CSG.Base  >
                    <CSG.Geometry useGroups >
                        <CSG.Base material={Colors[5]} >
                            <BoxBlendGeometry width={2} height={0.28} depth={0.05} radius={0.05} />
                        </CSG.Base>

                        <group
                            position-x={portPositionX}
                        >
                            <CSG.Addition material={Colors[6]}>
                                <BoxBlendGeometry width={0.22} height={0.07} depth={0.08} radius={0.03} />
                            </CSG.Addition>
                        </group>

                    </CSG.Geometry>
                </CSG.Base>

                <group
                    position-x={portPositionX}
                >
                    <CSG.Subtraction material={Colors[6]} >
                        <BoxBlendGeometry width={0.2} height={0.05} depth={1} radius={0.02} />
                    </CSG.Subtraction>
                </group>

            </CSG.Geometry>

            <Text3D
                position={[-0.9, -0.1, -0.035]}
                material={Colors[1]}
                font='./fonts/Braille_Regular.json'
                size={0.2}
                // letterSpacing={ }
                height={0.01}
            >
                energia
            </Text3D>

            <mesh
                scale={[0.0004, 0.0004, 0.01]}
                position={[0.77, -0.1, -0.035]}
            >
                <SvgGroup />
            </mesh>
        </mesh >
    </>
}