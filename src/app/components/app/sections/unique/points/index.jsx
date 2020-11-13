import React from 'react'
import FadeTransition, { FADE_DIRECTION } from '../../../util/fadeTranstiion'
import circle from './circle.svg'
import './styles.css'

const UniqueSectionPoints = () => (<>
    <div className="row my-5">
        <FadeTransition 
            direction={FADE_DIRECTION.NONE}
            delay="0.22s"
            className="col-md-4 text-center"
        >
            <div>
                <img
                    src={circle}
                    alt=""
                    className="unique-points__img"
                />
            </div>
            <div className="my-4">
                <h3>
                    Unique Factor #1
                </h3>
            </div>
        </FadeTransition>
        <FadeTransition 
            direction={FADE_DIRECTION.NONE}
            delay="0.44s"
            className="col-md-4 text-center"
        >
            <div>
                <img
                    src={circle}
                    alt=""
                    className="unique-points__img"
                />
            </div>
            <div className="my-4">
                <h3>
                    Unique Factor #2
                </h3>
            </div>
        </FadeTransition>
        <FadeTransition 
            direction={FADE_DIRECTION.NONE}
            delay="0.66s"
            className="col-md-4 text-center"
        >
            <div>
                <img
                    src={circle}
                    alt=""
                    className="unique-points__img"
                />
            </div>
            <div className="my-4">
                <h3>
                    Unique Factor #3
                </h3>
            </div>
        </FadeTransition>
    </div>
</>)

export default UniqueSectionPoints
