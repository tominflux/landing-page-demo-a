import React from 'react'
import classConcat from '../../../../misc/classConcat'
import graphics from './graphics.svg'
import './styles.css'

const CtaFooter = () => (
    <section className={classConcat(
        "container",
        "py-5",
        "cta-footer"
    )}>
        <h3 className="text-center py-4">
            What are you waiting for?
        </h3>
        <div>
            <img
                src={graphics}
                alt=""
                className="cta-footer__img"
            />
        </div>
        <h2 className="text-center py-5">
            Start making your life easier!
        </h2>
    </section>
)

export default CtaFooter
