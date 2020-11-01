import React from 'react'
import classConcat from '../../../../misc/classConcat'
import triangle from './triangle.svg'
import star from './star.svg'
import './styles.css'
import KeyFeaturesRow from './row'

const KeyFeaturesSection = () => (
    <section className={classConcat(
        "container",
        "px-md-5",
        "key-features"
    )}>
        <div className="text-center">
            <h2 className={classConcat(
                "text-center",
                "px-2",
                "py-1",
                "my-5",
                "key-features__heading"
            )}>
                Key Features
            </h2>
        </div>
        <KeyFeaturesRow
            imgSrc={triangle}
            invert
        >
            Description about key feature #1. Something 
            about this, and something about that, and 
            why this is something or other.
        </KeyFeaturesRow>
        <KeyFeaturesRow
            imgSrc={triangle}
        >
            Description about key feature #2. Something 
            about this, and something about that, and 
            why this is something or other.
        </KeyFeaturesRow>
        <KeyFeaturesRow
            imgSrc={triangle}
            invert
        >
            Description about key feature #3. Something 
            about this, and something about that, and 
            why this is something or other.
        </KeyFeaturesRow>
    </section>
)

export default KeyFeaturesSection
