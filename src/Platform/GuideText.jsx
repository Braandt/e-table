import { Center, Text3D } from "@react-three/drei";
import { BoxGeometry, CylinderGeometry, MeshStandardMaterial } from "three";
import Colors from '../01-geometriesAndColors/Colors.jsx'
import CubicGeometry from '../01-geometriesAndColors/CubicGeometry.jsx'
import Element from '../Cubes/Element.jsx'

export default function GuideText() {

    const fontSize = 0.12
    const fontHeight = 0.03
    const baseThickness = 0.1
    const lineThickness = 0.02

    const line = new BoxGeometry(lineThickness, 1, fontHeight)
    const circle = new CylinderGeometry(0.04, 0.04, fontHeight, 16, 1)

    const geometryColor = []

    Colors.map((value) => geometryColor.push(CubicGeometry(value)))

    const heInfos = { symbol: 'He', atomicNumber: 2, mass: 4, family: 18, period: 1, category: 'noble gas', height: 1, x: 0, z: 0 }
    const heBrailleInfos = { symbol: 'He', atomicNumber: 2, mass: 4, family: 18, period: 1, category: 'noble gas', height: 1, x: 0, z: 0 }

    return <>
        <mesh position={[-2.35, 0, 0]} rotation-x={Math.PI / 2}>
            <Element geometryColor={geometryColor} fontColors={Colors} infos={heInfos} />
        </mesh>

        <mesh position={[1.45, 0.3, 0]} rotation-x={Math.PI / 2}>
            <Element geometryColor={geometryColor} fontColors={Colors} infos={heBrailleInfos} isBrailleGuide />
        </mesh>

        <mesh position={[-3, 0.9, baseThickness / 2]}>
            <Text3D
                font='./fonts/Verdana_Bold.json'
                size={fontSize}
                height={fontHeight}
            >
                estado físico
            </Text3D>
            <Center bottom
                position={[0.4, -0.05, fontHeight / 2]}
            >
                <Center top>
                    <mesh
                        geometry={line}
                        scale-y={0.2}
                    >
                    </mesh>
                </Center>
                <mesh
                    geometry={circle}
                    rotation-x={Math.PI / 2}
                />


            </Center>
        </mesh>

        <Text3D
            font='./fonts/Verdana_Bold.json'
            position={[-1, 1.1, baseThickness / 2]}
            size={fontSize}
            height={fontHeight}
        >
            sólido
        </Text3D>


        <Text3D
            font='./fonts/Verdana_Bold.json'
            position={[-1, 0.9, baseThickness / 2]}
            size={fontSize}
            height={fontHeight}
        >
            líquido
        </Text3D>

        <Text3D
            font='./fonts/Verdana_Bold.json'
            position={[-1, 0.71, baseThickness / 2]}
            size={fontSize}
            height={fontHeight}
        >
            gasoso
        </Text3D>

        <mesh position={[-2.8, -1, baseThickness / 2]}>
            <Text3D
                font='./fonts/Verdana_Bold.json'
                size={fontSize}
                height={fontHeight}
            >
                massa
            </Text3D>
            <Center
                top
                position={[0, 0.15, fontHeight / 2]}
            >
                <Center bottom>
                    <mesh
                        geometry={line}
                        scale-y={0.25}
                    >
                    </mesh>
                </Center>
                <mesh
                    geometry={circle}
                    rotation-x={Math.PI / 2}
                />


            </Center>
        </mesh>

        <mesh position={[-3.1, -1.15, baseThickness / 2]}>
            <Text3D
                font='./fonts/Verdana_Bold.json'
                size={fontSize}
                height={fontHeight}
            >
                elemento
            </Text3D>
            <Center
                top
                position={[0.1, 0.15, fontHeight / 2]}
            >
                <Center bottom>
                    <mesh
                        geometry={line}
                        scale-y={1}
                    >
                    </mesh>
                </Center>
                <mesh
                    geometry={circle}
                    rotation-x={Math.PI / 2}
                />

            </Center>
        </mesh>

        <mesh position={[-1.5, 0.3, baseThickness / 2]}>
            <Text3D
                font='./fonts/Verdana_Bold.json'
                size={fontSize}
                height={fontHeight}
            >
                número atômico
            </Text3D>
            <Center
                top
                position={[-0.03, 0.05, fontHeight / 2]}
                rotation-z={Math.PI / 2}
            >
                <Center bottom>
                    <mesh
                        geometry={line}
                        scale-y={0.2}
                    >
                    </mesh>
                </Center>
                <mesh
                    geometry={circle}
                    rotation-x={Math.PI / 2}
                />
            </Center>
        </mesh>

        <mesh position={[-1.5, -0.15, baseThickness / 2]}>
            <Text3D
                font='./fonts/Verdana_Bold.json'
                size={fontSize}
                height={fontHeight}
            >
                período
            </Text3D>
            <Center
                top
                position={[-0.03, 0.05, fontHeight / 2]}
                rotation-z={Math.PI / 2}
            >
                <Center bottom>
                    <mesh
                        geometry={line}
                        scale-y={0.2}
                    >
                    </mesh>
                </Center>
                <mesh
                    geometry={circle}
                    rotation-x={Math.PI / 2}
                />
            </Center>
        </mesh>

        <mesh position={[-1.5, -0.33, baseThickness / 2]}>
            <Text3D
                font='./fonts/Verdana_Bold.json'
                size={fontSize}
                height={fontHeight}
            >
                família
            </Text3D>
            <Center
                top
                position={[-0.03, 0.05, fontHeight / 2]}
                rotation-z={Math.PI / 2}
            >
                <Center bottom>
                    <mesh
                        geometry={line}
                        scale-y={0.2}
                    >
                    </mesh>
                </Center>
                <mesh
                    geometry={circle}
                    rotation-x={Math.PI / 2}
                />
            </Center>
        </mesh>

        <mesh position={[-1, -0.6, baseThickness / 2]}>
            <Text3D
                font='./fonts/Verdana_Bold.json'
                size={fontSize}
                height={fontHeight}
            >
                metal
            </Text3D>
            <mesh geometry={circle} rotation-x={Math.PI / 2} position={[-0.1, 0.04, 0]} scale={1.6} material={Colors[0]} />
        </mesh>

        <mesh position={[-1, -0.77, baseThickness / 2]}>
            <Text3D
                font='./fonts/Verdana_Bold.json'
                size={fontSize}
                height={fontHeight}
            >
                semimetal
            </Text3D>
            <mesh geometry={circle} rotation-x={Math.PI / 2} position={[-0.1, 0.04, 0]} scale={1.6} material={Colors[5]} />
        </mesh>

        <mesh position={[-1, -0.94, baseThickness / 2]}>
            <Text3D
                font='./fonts/Verdana_Bold.json'
                size={fontSize}
                height={fontHeight}
            >
                ametal
            </Text3D>
            <mesh geometry={circle} rotation-x={Math.PI / 2} position={[-0.1, 0.04, 0]} scale={1.6} material={Colors[4]} />
        </mesh>

        <mesh position={[-1, -1.1, baseThickness / 2]}>
            <Text3D
                font='./fonts/Verdana_Bold.json'
                size={fontSize}
                height={fontHeight}
            >
                gás nobre
            </Text3D>
            <mesh geometry={circle} rotation-x={Math.PI / 2} position={[-0.1, 0.04, 0]} scale={1.6} material={Colors[2]} />
        </mesh>
    </>
}