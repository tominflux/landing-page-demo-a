import React from 'react'
import heroImage from './hero.svg'
import './styles.css'

const UniqueSectionHero = () => (<>
    <div className="row">
        <div className="col text-center">
            <img
                src={heroImage}
                alt=""
                className="unique-hero__img"
            />
        </div>
    </div>
    <div className="row">
        <div className="col text-center py-5">
            <h2>
                We Are The Only People Doing This!
            </h2>
        </div>
    </div>
</>)

export default UniqueSectionHero
