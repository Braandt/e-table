import * as CSG from '@react-three/csg'
import { Text3D } from '@react-three/drei';
import { BoxBlendGeometry } from "../01-geometriesAndColors";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { ExtrudeGeometry, Group, Mesh, MeshNormalMaterial } from 'three';
import Colors from "../01-geometriesAndColors/Colors";
import icon from '../../public/headphones-solid.jsx'

const svgMarkup = icon

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

    const portPositionX = 0.4

    return <>
        <mesh
            rotation-y={Math.PI}
            position={[18, -0.225, 9.225]}
            castShadow
        >
            <CSG.Geometry useGroups>
                <CSG.Base  >
                    <CSG.Geometry useGroups >
                        <CSG.Base material={Colors[5]} >
                            <BoxBlendGeometry width={1.6} height={0.28} depth={0.05} radius={0.05} />
                        </CSG.Base>

                        <group
                            position-x={portPositionX}
                            rotation-x={Math.PI / 2}
                        >
                            <CSG.Addition material={Colors[6]} >
                                <cylinderGeometry args={[0.04, 0.04, 0.08]} />
                            </CSG.Addition>
                        </group>

                    </CSG.Geometry>
                </CSG.Base>

                <group
                    position-x={portPositionX}
                    rotation-x={Math.PI / 2}

                >
                    <CSG.Subtraction material={Colors[6]} >
                        <cylinderGeometry args={[0.03, 0.03]} />
                    </CSG.Subtraction>
                </group>
            </CSG.Geometry>

            <Text3D
                position={[-0.75, -0.1, -0.035]}
                material={Colors[1]}
                font='./fonts/Braille_Regular.json'
                size={0.2}
                // letterSpacing={ }
                height={0.01}
            >
                fones
            </Text3D>

            <mesh
                rotation-z={Math.PI}
                scale={[0.0004, 0.0004, 0.01]}
                position={[0.75, 0.1, -0.035]}
            >
                <SvgGroup />
            </mesh>
        </mesh >
    </>
}