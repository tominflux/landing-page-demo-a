import React from 'react'
import classConcat from '../../../../misc/classConcat'
import WaveDots from './waveDots'
import RingsAnimationA from '../../animations/ringsA'
import Title from './title'
import './styles.css'

const LandingSection = () => (
    <section className={classConcat(
        "container-fluid",
        "landing"
    )}>
        <WaveDots />
        <div className="row align-items-center">
            <div className="col-md-5 text-center">
                <RingsAnimationA />
            </div>
            <div className="col-md-7">
                <Title />
            </div>
        </div>
    </section>
)

export default LandingSection
