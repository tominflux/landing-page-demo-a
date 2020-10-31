import React from 'react'
import classConcat from '../../../../misc/classConcat'
import UniqueSectionHero from './hero'
import UniqueSectionPoints from './points'
import './styles.css'

const UniqueSection = () => (
    <section className={classConcat(
        "container",
        "px-md-3",
        "py-5",
        "unique"
    )}>
        <UniqueSectionHero />
        <UniqueSectionPoints />
    </section>
)

export default UniqueSection
