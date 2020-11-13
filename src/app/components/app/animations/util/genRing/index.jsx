import * as THREE from 'three'
import * as FATLINE from 'three-fatline'
import genLine from '../genLine'
import genLineMat from '../genLineMat'

const genRingPositions = (pointCount) => {
    // Generate positions.
    const curve = new THREE.EllipseCurve(
        0,  0,            
        0.66,  0.66,           
        0,  2 * Math.PI, 
        false,
        0
    )
    const points = curve.getPoints(pointCount)
    const positions = []
    for (const point of points) {
        positions.push(point.x)
        positions.push(point.y)
        positions.push(0)
    }
    return positions
}

export const genRingGeoAndMat = (dimensions, pointCount=64) => {
    const positions = genRingPositions(pointCount)
    const geometry = new FATLINE.LineGeometry()
    geometry.setPositions(positions)
    geometry.computeBoundingSphere()
    geometry.center()
    const material = genLineMat(dimensions)
    return { geometry, material }
}

const genRing = (geometry, material) => 
    genLine(geometry, material)

export default genRing
