import React from 'react'
import * as THREE from 'three'
import { 
    createThreeAnimation, 
    initThreeAnimation,
    startThreeAnimation, 
    stopThreeAnimation 
} from '../../../../misc/threeAnimation'
import genLine from '../util/genLine'
import genRing, { genRingGeoAndMat } from '../util/genRing'
import genSpoke, { genSpokeGeoAndMat } from '../util/genSpoke'
import './styles.css'
import { gsap } from 'gsap'


const CentralityAnimation = () => {
    //Refs
    const canvas = React.createRef(null)
    //Effects
    React.useEffect(() => {
        if (canvas.current === null) 
            return
        const threeAni = initThreeAnimation(
            createThreeAnimation(), canvas.current
        )

        const dimensions = {
            w: canvas.current.clientWidth,
            h: canvas.current.clientHeight
        }

        // Generate rings.
        const { geometry: ringGeo, material: ringMat } = 
            genRingGeoAndMat(dimensions)
        const outerRing = genRing(ringGeo, ringMat)
        const innerRing = genRing(ringGeo, ringMat)
        innerRing.scale.set(0.5, 0.5, 0.5)

        // Add rings to scene.
        threeAni.scene.add(outerRing)
        threeAni.scene.add(innerRing)

        //
        startThreeAnimation(threeAni)        
        
        const onHover = () => {
            // rotateAgain(mainCircles)
        }
        //
        canvas.current.addEventListener("mouseenter", onHover)
        canvas.current.addEventListener("touchstart", onHover)
        //
        return () => {
            canvas.current.removeEventListener("mouseenter", onHover)
            canvas.current.removeEventListener("touchstart", onHover)
            stopThreeAnimation(threeAni)
        }
    })
    //Render
    return (
        <div className="rings-animation-a">
            <canvas 
                ref={canvas}
                className="rings-animation-a__canvas"
            />
        </div>
    )
}

export default CentralityAnimation