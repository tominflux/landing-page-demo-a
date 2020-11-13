import * as THREE from 'three'
import * as FATLINE from 'three-fatline'
import { gsap } from 'gsap'
import discImg from './disc.png'

export const waveRing = (
    ring, 
    scaleOrigin, 
    duration=3,
    delay=0,
    amp=1.15
) => {
    const timeline = gsap.timeline({
        repeat: -1,
        yoyo: true
    })
    const max = amp * scaleOrigin
    const min = (1/amp) * scaleOrigin
    ring.scale.set(
        min, min, min
    )
    timeline.to(
        ring.scale, {
            x: max, y: max, z: max,
            duration,
            ease: "sine.inOut"
        }
    )
    timeline.seek(delay)
}