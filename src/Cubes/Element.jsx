import AtomicNumber from './AtomicNumber.jsx'
import Mass from './Mass.jsx'
import Period from './Period.jsx'
import Phase from './Phase.jsx'
import Symbol from './Symbol.jsx'
import Family from './Family.jsx'
import SymbolBraille from './SymbolBraille.jsx'
import PeriodBraille from './PeriodBraille.jsx'

export default function Element({ geometryColor, fontColors, infos, isBrailleGuide }) {

    let geometry = geometryColor[1]
    let brailleColor = fontColors[1]
    let fontColor = [fontColors[0], fontColors[1]]

    if (infos.symbol == 'H') {
        geometry = geometryColor[3]
        brailleColor = fontColors[3]
        fontColor = [fontColors[0], fontColors[3]]
    } else if (infos.category == 'diatomic nonmetal' || infos.category == 'polyatomic nonmetal') {
        geometry = geometryColor[4]
        brailleColor = fontColors[4]
        fontColor = [fontColors[0], fontColors[4]]
    } else if (infos.category == 'noble gas') {
        geometry = geometryColor[2]
        brailleColor = fontColors[2]
        fontColor = [fontColors[0], fontColors[2]]
    } else if (infos.category == 'metalloid') {
        geometry = geometryColor[5]
        brailleColor = fontColors[5]
        fontColor = [fontColors[1], fontColors[5]]
    }

    const fontHeight = 0.03
    const brailleHeight = 0.02

    return <>
        <mesh position={[infos.x, infos.height, infos.z]}>

            <mesh scale-y={infos.height}>
                {geometry}
            </mesh>

            {/* Top Face */}
            <Symbol symbol={infos.symbol} fontColor={fontColor} fontHeight={fontHeight} />

            {isBrailleGuide ?? <AtomicNumber atomicNumber={infos.atomicNumber} fontColor={fontColor} fontHeight={fontHeight} />}

            {isBrailleGuide ?? <Mass mass={infos.mass} fontColor={fontColor} fontHeight={fontHeight} />}

            {isBrailleGuide ?? <Period period={infos.period} fontColor={fontColor} fontHeight={fontHeight} />}

            {isBrailleGuide ?? <Family family={infos.family} fontColor={fontColor} fontHeight={fontHeight} />}

            <Phase phase={"//"} fontColor={fontColor} fontHeight={fontHeight} />

            {/* Front face */}
            <SymbolBraille symbol={infos.symbol} fontColor={brailleColor} fontHeight={brailleHeight} />

            {/* Right face */}
            <PeriodBraille period={infos.period} fontColor={brailleColor} fontHeight={brailleHeight} />

        </mesh>
    </>
}