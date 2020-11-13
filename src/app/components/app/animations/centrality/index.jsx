import React from 'react'
import * as THREE from 'three'
import { 
    createThreeAnimation, 
    initThreeAnimation,
    startThreeAnimation, 
    stopThreeAnimation 
} from '../../../../misc/threeAnimation'
import genLine from '../util/genLine'
import genRing, { genRingGeo, genRingGeoAndMat } from '../util/genRing'
import genSpoke, { genSpokeGeoAndMat } from '../util/genSpoke'
import './styles.css'
import { gsap } from 'gsap'
import genLineMat from '../util/genLineMat'
import { waveRing, waveRings } from './util'


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
        const geometry = genRingGeo()
        const thickMaterial = genLineMat(dimensions)
        const thinMaterial = genLineMat(dimensions, 3)
        const rings = []
        const ringCount = 5
        const getRingScale = (index) => (
            1.0 - index * 0.66 / ringCount
        )
        for (let i=0; i<ringCount; i++) {
            const material = (
                i % 2 === 0 
                    ? thickMaterial : thinMaterial
            ) 
            const ring = genRing(geometry, material)
            const scale = getRingScale(i)
            ring.scale.set(scale, scale, scale)
            rings.push(ring)
        }

        // Start waving rings.
        for (const ring of rings) {
            const index = rings.indexOf(ring)
            const scale = getRingScale(index)
            waveRing(ring, scale, 1.88, index / 2, 1.066)
        }

        // Add rings to scene.
        for (const ring of rings) {
            threeAni.scene.add(ring)
        }

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
