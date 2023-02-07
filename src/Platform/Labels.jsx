import { MeshBasicMaterial, MeshStandardMaterial } from 'three'
import Family1_2Braille from './LabelFamily1-2Braille.jsx'
import Family1 from './LabelFamily1.jsx'
import Family13_17 from './LabelFamily13-17.jsx'
import Family18 from './LabelFamily18.jsx'
import Family2 from './LabelFamily2.jsx'
import Family3_12 from './LabelFamily3-12.jsx'
import Family4_18Braille from './LabelFamily4-18Braille.jsx'
import PeriodsLeft from './LabelPeriodsLeft.jsx'
import PeriodsRight from './LabelPeriodsRight.jsx'
import Colors from '../01-geometriesAndColors/Colors.jsx'

export default function Labels() {

    const labelThickness = 0.1
    const radius = 0.1
    const height = 0.02
    const fontSize = 0.3
    const fontSizeBraille = 0.3

    return <>
        <mesh>
            <Family1 labelThickness={labelThickness} radius={radius} height={height} colors={Colors} fontSize={fontSize} />

            <Family2 labelThickness={labelThickness} radius={radius} height={height} colors={Colors} fontSize={fontSize} />

            <Family3_12 labelThickness={labelThickness} radius={radius} height={height} colors={Colors} fontSize={fontSize} />

            <Family13_17 labelThickness={labelThickness} radius={radius} height={height} colors={Colors} fontSize={fontSize} />

            <Family18 labelThickness={labelThickness} radius={radius} height={height} colors={Colors} fontSize={fontSize} />

            <Family4_18Braille labelThickness={labelThickness} radius={radius} height={height} fontSizeBraille={fontSizeBraille} colors={Colors} />

            <Family1_2Braille labelThickness={labelThickness} radius={radius} height={height} fontSizeBraille={fontSizeBraille} colors={Colors} />

            <PeriodsLeft labelThickness={labelThickness} radius={radius} height={height} fontSizeBraille={fontSizeBraille} colors={Colors} fontSize={fontSize} />

            <PeriodsRight labelThickness={labelThickness} radius={radius} height={height} fontSizeBraille={fontSizeBraille} colors={Colors} fontSize={fontSize} />
        </mesh>
    </>
}