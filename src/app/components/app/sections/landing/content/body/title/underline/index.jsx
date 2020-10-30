import React from 'react'
import TitlePoint from './point'
import './styles.css'

const TitleUnderline = (props) => {
    //
    const genPoints = () => {
        const points = []
        const cellSize = 100 / 44
        let i = 0
        for (let x=0; x<100; x+=cellSize) {
            const point = (
                <TitlePoint
                    key={i}
                    id={`title-point-${i}`} 
                    x={x}
                />
            )
            points.push(point)
            i++
        }
        return points
    }
    //
    return (
        <div className="title__underline">
            { genPoints() }
        </div>
    )
}

export default TitleUnderline