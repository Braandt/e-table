import data from '../../public/Periodic-Table-JSON-master/data2.json'
import Element from './Element.jsx'
import CubicGeometry from '../01-geometriesAndColors/CubicGeometry'
import { MeshBasicMaterial, MeshStandardMaterial } from 'three'
import Colors from '../01-geometriesAndColors/Colors'

export default function Cubes() {

    // Define cube colors, create geometry with them
    // const colors = ['white', 'black', 'orange', 'darkblue', 'green', '#6f6666']

    const geometryColor = []

    Colors.map((value) => geometryColor.push(CubicGeometry(value)))

    // Gap between cubes
    const gap = 1.1

    // Define cubes properties
    let cubes = []

    const elements = data.elements
    elements.map((value, index) => {
        const symbol = value.symbol
        const atomicNumber = value.number
        const mass = Math.trunc(Math.round(value.atomic_mass))
        const family = value.xpos
        const period = value.ypos
        const category = value.category
        const height = value.height * 0.05 + 0.5
        const x = value.xpos * gap
        const z = value.ypos * gap

        // // Test only (comment line *) -----------------------
        // if (symbol == 'C') {
        //     cubes[index] = { symbol, atomicNumber, mass, family, period, category, height, x, z }
        // }
        // // --------------------------------

        // *
        cubes[index] = { symbol, atomicNumber, mass, family, period, category, height, x, z }
    })

    return <>
        {cubes.map((value, index) => <Element geometryColor={geometryColor} fontColors={Colors} infos={value} key={index} />)}
    </>
}