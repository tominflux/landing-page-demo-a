import React from 'react'
import { 
    createThreeAnimation, 
    initThreeAnimation,
    startThreeAnimation, 
    stopThreeAnimation 
} from '../../../../misc/threeAnimation'
import { genCircles, rotateOnce, rotateAgain } from './util'
import './styles.css'


const RingsAnimationA = () => {
    //Refs
    const canvas = React.createRef(null)
    //Effects
    React.useEffect(() => {
        if (canvas.current === null)  {
            return 
        }
        const threeAni = initThreeAnimation(
            createThreeAnimation(), 
            canvas.current
        )
        const mainCircles = genCircles({
            w: canvas.current.clientWidth,
            h: canvas.current.clientHeight
        })
        const [mainCircleA, mainCircleB] = mainCircles
        threeAni.scene.add(mainCircleA)
        threeAni.scene.add(mainCircleB)
        //
        startThreeAnimation(threeAni)
        //
        rotateOnce(mainCircles)
        //
        const onHover = () => {
            rotateAgain(mainCircles)
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

export default RingsAnimationA
