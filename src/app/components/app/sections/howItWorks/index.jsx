import React from 'react'
import classConcat from '../../../../misc/classConcat'
import HowItWorksStep from './step'
import rectangle from './rectangle.svg'
import './styles.css'

const HowItWorksSection = () => (
    <section className={classConcat(
        "container",
        "how-it-works",
        "py-5"
    )}>
        <div className="row">
            <div className={classConcat(
                "col-md-4",
                "how-it-works__step",
                "how-it-works__step--1"
            )}>
                <HowItWorksStep 
                    index={0}
                    className="text-left"
                    imgSrc={rectangle}
                    heading="Step #1"
                    paragraph={<>
                        This happens and that happens and
                        then somethiing else happens. 
                    </>}
                />
            </div>
            <div className={classConcat(
                "col-md-4",
                "how-it-works__step",
                "how-it-works__step--2"
            )}>
                <HowItWorksStep 
                    index={1}
                    className="text-center"
                    imgSrc={rectangle}
                    heading="Step #2"
                    paragraph={<>
                        This happens and that happens and
                        then somethiing else happens. 
                    </>}
                />
            </div>
            <div className={classConcat(
                "col-md-4",
                "how-it-works__step",
                "how-it-works__step--3"
            )}>
                <HowItWorksStep 
                    index={2}
                    className="text-right"
                    imgSrc={rectangle}
                    heading="Step #3"
                    paragraph={<>
                        This happens and that happens and
                        then somethiing else happens. 
                    </>}
                />
            </div>
        </div>
    </section>
)

export default HowItWorksSection
