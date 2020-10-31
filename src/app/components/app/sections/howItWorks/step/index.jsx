import React from 'react'
import classConcat from '../../../../../misc/classConcat'
import './styles.css'

const HowItWorksStep = ({className, imgSrc, heading, paragraph}) => (
    <div className={classConcat(
        "how-it-works-step",
        className
    )}>
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
    </div>
)

export default HowItWorksStep
