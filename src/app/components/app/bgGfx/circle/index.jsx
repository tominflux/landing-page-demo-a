import React from 'react'
import './styles.css'

const Circle = (props) => {
    //State
    const [isHovering, setHovering] = React.useState(false)
    //Effects
    // - Observe Mouse Position

    //Constants
    const className = (
        `circle${isHovering ? " circle--hovering" : ""}`
    )
    const style = {
        left: `${props.x}vw`,
        top: `${props.y}vh`,
        width: props.r,
        height: props.r,
        animationDelay: props.animationDelay
    }
    //Render
    return (
        <div 
            className={className}
            style={style}
        />
    )
}

export default Circle
