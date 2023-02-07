import { MeshStandardMaterial } from "three"

function Colors() {

    const colors = ['black', 'white', 'orange', 'dodgerblue', '#00ff00', '#333333', '#111111']

    const Colors = []

    colors.map((value) => Colors.push(new MeshStandardMaterial({ color: value, metalness: 0, roughness: 10 })))

    return Colors
}

export default Colors()