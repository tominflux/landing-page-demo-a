import React from 'react'
import Dot from './dot'
import './styles.css'

const WaveDots = () => {
    //
    const genDots = () => {
        const dots = []
        const cellSize = 100/26.66
        let i = 0;
        for (let x=0; x<=100; x+=cellSize) {
            const animationDelay = 0.0 + 0.66 * x / 100
            for (let y=0; y<=100; y+=cellSize) {
                const distanceFromLine = (
                    1 
                    / Math.abs(
                        75 
                        - (
                            y 
                            + Math.sin(x / 9) * 6
                            + 3
                        )
                    )
                )
                const radius = (
                    Math.log(
                        distanceFromLine 
                        * 20
                        , 6
                    ) 
                    * 3.33
                    / Math.pow(Math.abs(33 - x) / 44, 0.22)
                )
                const limitedRadius = Math.min(radius, 33)
                if (limitedRadius > 3) {
                    const key = i
                    i++
                    const circle = (
                        <Dot 
                            key={key}
                            id={key}
                            x={x}
                            y={y}
                            r={`${limitedRadius}pt`}
                            animationDelay={`${animationDelay}s`}
                        />
                    )
                    dots.push(circle)
                }
            }
        }
        return dots
    }
    //Render
    return (
        <div className="bg-gfx">
            { genDots() }
        </div>
    )
}

export default WaveDots