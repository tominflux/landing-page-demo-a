import React from 'react'
import Circle from './circle'
import './styles.css'

const BgGfx = () => {
    //
    const genCirclesA = () => {
        const circles = []
        const cellSize = 100/23.33
        let i = 0;
        for (let x=0; x<=100; x+=cellSize) {
            const animationDelay = 0.0 + 0.66 * x / 100
            for (let y=0; y<=100; y+=cellSize) {
                const r = (Math.exp(y / 10) / 100) / 6.66
                if (r > 3.33) {
                    const key = i
                    i++
                    const circle = (
                        <Circle 
                            key={key}
                            id={key}
                            x={x}
                            y={y}
                            r={`${r}pt`}
                            animationDelay={`${animationDelay}s`}
                        />
                    )
                    circles.push(circle)
                }
            }
        }
        return circles
    }
    //Render
    return (
        <div className="bg-gfx">
            { genCirclesA() }
        </div>
    )
}

export default BgGfx