import React from 'react'
import FadeTransition, { FADE_DIRECTION } from '../../../util/fadeTranstiion'
import heroImage from './img/hero.svg'
import './styles.css'

const UniqueSectionHero = () => (<>
    <div className="row">
        <div className="col text-center">
            <FadeTransition
                tag="img"
                direction={FADE_DIRECTION.NONE}
                delay="0.2s"
                src={heroImage}
                alt=""
                className="unique-hero__img"
            />
        </div>
    </div>
    <div className="row">
        <div className="col text-center py-5">
            <FadeTransition
                tag="h2"
                delay="0.44s"
            >
                We Are The Only People Doing This!
            </FadeTransition>
        </div>
    </div>
</>)

export default UniqueSectionHero
