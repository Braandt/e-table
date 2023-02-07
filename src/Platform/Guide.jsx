import { BoxBlendGeometry } from "../01-geometriesAndColors";
import GuideText from "./GuideText";
import GuideTextBraille from "./GuideTextBraille";
import Colors from '../01-geometriesAndColors/Colors.jsx'

export default function Guide() {

    const baseThickness = 0.1

    return <>
        {/* Guide base */}
        <mesh
            rotation-x={-Math.PI / 2}
            position={[6.65, baseThickness / 2, 1.44]}
            castShadow
            receiveShadow
            material={Colors[5]}
        >
            <BoxBlendGeometry width={6.41} height={2.73} depth={baseThickness} radius={0.1} />

            {/* Textos */}
            <GuideText />
            {/* Divider */}
            <mesh position={[0.1, 0, baseThickness]}>
                <BoxBlendGeometry width={0.05} height={2.3} depth={0.01} radius={0.025} />
            </mesh>
            <GuideTextBraille />
        </mesh>

    </>
}