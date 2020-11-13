import * as THREE from 'three'
import * as FATLINE from 'three-fatline'
import genLine from '../genLine'
import genLineMat from '../genLineMat'

const genSpokePositions = () => {
    const points = [
        new THREE.Vector3(-0.66, 0.0, 0.0),
        new THREE.Vector3(+0.66, 0.0, 0.0)
    ]
    const positions = []
    for (const point of points) {
        positions.push(point.x)
        positions.push(point.y)
        positions.push(point.z)
    }
    return positions
}

export const genSpokeGeoAndMat = (dimensions) => {
    const positions = genSpokePositions()
    const geometry = new FATLINE.LineGeometry()
    geometry.setPositions(positions)
    geometry.computeBoundingBox()
    geometry.center()
    const material = genLineMat(dimensions)
    return { geometry, material }
}

const genSpoke = (geometry, material) => 
    genLine(geometry, material)

export default genSpoke