import React from 'react'
import classConcat from '../../../../misc/classConcat'
import BgGfx from './bgGfx'
import Gfx from './gfx'
import Title from './title'
import './styles.css'

const LandingSection = () => (
    <section className={classConcat(
        "container-fluid",
        "landing"
    )}>
        <BgGfx />
        <div className="row align-items-center">
            <div className="col-md-5 text-center">
                <Gfx />
            </div>
            <div className="col-md-7">
                <Title />
            </div>
        </div>
    </section>
)

export default LandingSection
