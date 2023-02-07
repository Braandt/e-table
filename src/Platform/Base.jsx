import { BoxBlendGeometry } from '../01-geometriesAndColors'
import Colors from '../01-geometriesAndColors/Colors'

export default function Base() {

    const baseThickness = 0.45

    return <>
        <mesh
            position={[10.5, -baseThickness / 2, 4.4]}
            rotation-x={Math.PI / 2}
            receiveShadow
            castShadow
            visible={true}
            material={Colors[6]}
        >
            <BoxBlendGeometry width={22} height={9.6} radius={0.5} depth={baseThickness} />

        </mesh>
    </>
}