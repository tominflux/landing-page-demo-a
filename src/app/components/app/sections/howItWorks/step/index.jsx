import React from 'react'
import classConcat from '../../../../../misc/classConcat'
import FadeTransition, { FADE_DIRECTION } from '../../../util/fadeTranstiion'
import './styles.css'

const HowItWorksStep = ({index, className, imgSrc, heading, paragraph}) => (
    <FadeTransition 
        offset={{x: 0, y: 440}}
        className={classConcat(
            "how-it-works-step",
            className
        )}
    >
        <div className="px-5 py-4">
            <img 
                src={imgSrc}
                alt=""
                className="how-it-works-step__img"
            />
        </div>
        <div className="px-5">
            <h3 className="how-it-works-step__heading">
                {heading}
            </h3>
            <p className="how-it-works-step__paragraph">
                {paragraph}
            </p> 
        </div>
    </FadeTransition>
)

export default HowItWorksStep
