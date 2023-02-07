import Base from './Base.jsx'
import Buttons from './Buttons.jsx'
import Guide from './Guide.jsx'
import Labels from './Labels.jsx'
import PowerPort from './PowerPort.jsx'
import PowerButton from './PowerButton.jsx'
import PhonePort from './PhonePort.jsx'

export default function Platform() {

    return <>
        <Base />
        <Labels />
        <Guide />
        <Buttons />
        <PowerButton />
        <PowerPort />
        <PhonePort />
    </>


}