import React from 'react'
import './styles.css'

const Circle = (props) => {
    //
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
            className="circle"
            style={style}
        />
    )
}

export default Circle
