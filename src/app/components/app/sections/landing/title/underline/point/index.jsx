import React from 'react'
import { endLoop, startLoop } from '../../../../../../../misc/animationLoop'
import { getMousePosition } from '../../../../../../../misc/mouseTracker'
import './styles.css'

const HOVER_DISTANCE = 330

const TitlePoint = (props) => {
    //Ref
    const ref = React.createRef(null)
    //State
    const [isHovering, setHovering] = React.useState(false)
    //Effects
    // - Observe Mouse Position
    React.useEffect(() => {
        const loopKey = props.id
        const onLoop = () => {
            if (ref.current === null) {
                return
            }
            const mousePosition = getMousePosition()
            const rect = ref.current.getBoundingClientRect()
            const elementPosition = { 
                x: rect.x,
                y: rect.y
            }
            const distance = Math.floor(
                Math.sqrt(
                    Math.pow(elementPosition.x - mousePosition.x, 2) +
                    Math.pow(elementPosition.y - mousePosition.y, 2)
                ) 
            )
            const currentlyHovering = (distance < HOVER_DISTANCE)
            if (isHovering !== currentlyHovering) {
                setHovering(currentlyHovering)
            }
        }
        startLoop(onLoop, loopKey)
        return () => endLoop(onLoop, loopKey)
    })
    ///
    const className = (
        `title__point${isHovering ? " title__point--hover" : ""}`
    )
    const style = {
        left: `${props.x}%`
    }
    //
    return (
        <div 
            className={className}
            style={style}
            ref={ref}
        />
    )
}

export default TitlePoint