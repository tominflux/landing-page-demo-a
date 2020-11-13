import React from 'react'
import KeyFeaturesRow from './row'
import FadeTransition, { FADE_DIRECTION } from '../../util/fadeTranstiion'
import classConcat from '../../../../misc/classConcat'
import triangle from './triangle.svg'
import star from './star.svg'
import './styles.css'
import RingsAnimationA from '../../animations/ringsA'
import CentralityAnimation from '../../animations/centrality'

const KeyFeaturesSection = () => (
    <section className={classConcat(
        "container",
        "px-md-5",
        "key-features"
    )}>
        <div className="text-center">
            <FadeTransition 
                tag="h2"
                direction={FADE_DIRECTION.NONE}
                className={classConcat(
                    "text-center",
                    "px-2",
                    "py-1",
                    "my-5",
                    "key-features__heading"
                )}
                delay="0.15s"
            >
                Key Features
            </FadeTransition>
        </div>
        <KeyFeaturesRow
            index={0}
            imgSrc={triangle}
            animation={<CentralityAnimation />}
            invert
        >
            Description about key feature #1. Something 
            about this, and something about that, and 
            why this is something or other.
        </KeyFeaturesRow>
        <KeyFeaturesRow
            index={1}
            imgSrc={triangle}
            animation={<RingsAnimationA />}
        >
            Description about key feature #2. Something 
            about this, and something about that, and 
            why this is something or other.
        </KeyFeaturesRow>
        <KeyFeaturesRow
            index={2}
            imgSrc={triangle}
            animation={<RingsAnimationA />}
            invert
        >
            Description about key feature #3. Something 
            about this, and something about that, and 
            why this is something or other.
        </KeyFeaturesRow>
    </section>
)

export default KeyFeaturesSection
