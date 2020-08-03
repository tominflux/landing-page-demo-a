import * as THREE from 'three'
import * as FATLINE from 'three-fatline'
import { gsap } from 'gsap'
import discImg from './disc.png'

const genOrbitCircle = () => {
    const geometry = new THREE.Geometry()
    geometry.vertices.push(new THREE.Vector3( 0, 0, 0));
    const sprite = (
        new THREE.TextureLoader().load(discImg)
    )
    const material = new THREE.PointsMaterial( 
        { 
            size: 33, 
            color: "rgb(44, 44, 66)",
            map: sprite,
            transparent: true
        } 
    );
    const circle = new THREE.Points(geometry, material)
    return circle
}

export const genCircles = (canvasDimensions) => {
    
    //Generate positions.
    const curve = new THREE.EllipseCurve(
        0,  0,            
        0.66,  0.66,           
        0,  2 * Math.PI, 
        false,
        0
    )
    const points = curve.getPoints(64)
    const positions = []
    for (const point of points) {
        positions.push(point.x)
        positions.push(point.y)
        positions.push(0)
    }
    //Create geometry and material.
    const geometry = new FATLINE.LineGeometry()
    geometry.setPositions(positions)
    geometry.computeBoundingSphere()
    geometry.center()
    const material = new FATLINE.LineMaterial({ 
        color: "rgb(44, 44, 66)",
        linewidth: 6,
        resolution: new THREE.Vector2(
            canvasDimensions.w, 
            canvasDimensions.h
        )
    })
    
    //Put together objects.
    const circleA = new FATLINE.Line2(geometry, material);
    const circleB = new FATLINE.Line2(geometry, material); 
    
    const orbitCircle = genOrbitCircle()
    orbitCircle.position.set(
        0.66, 0, 0
    )

    circleA.add(orbitCircle)
    
    //
    return [
        circleA,
        circleB
    ]
}

export const rotateOnce = (circles) => {
    const [circleA, circleB] = circles
    circleA.rotation.y = 0
    circleA.rotation.x = Math.PI / 4 
    circleB.rotation.y = 0
    circleB.rotation.x = -Math.PI / 4
    gsap.to(
        circleA.rotation,
        {
            y: -3.75 * Math.PI,
            duration: 2.66
        }
    )
    gsap.to(
        circleA.rotation,
        {
            z: 4.25 * Math.PI,
            duration: 3.33
        }
    )
    gsap.to(
        circleB.rotation,
        {
            y: 1.5 + 3.75 * Math.PI,
            duration: 2.66
        }
    )
}

export const rotateAgain = (circles) => {
    const [circleA, circleB] = circles
    gsap.to(
        circleA.rotation,
        {
            y: circleA.rotation.y - 3.0 * Math.PI,
            duration: 2.66
        }
    )
    gsap.to(
        circleA.rotation,
        {
            z: circleB.rotation.y + 3.33 * Math.PI,
            duration: 3.33
        }
    )
    gsap.to(
        circleB.rotation,
        {
            y: circleB.rotation.y + 3.33 * Math.PI,
            duration: 2.66
        }
    )
}