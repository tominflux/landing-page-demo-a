import React from 'react'
import classConcat from '../../../../misc/classConcat'
import triangle from './triangle.svg'
import star from './star.svg'
import './styles.css'

const KeyFeaturesSection = () => (
    <section className={classConcat(
        "container",
        "px-md-5",
        "key-features"
    )}>
        <div className="row align-items-center my-5 py-5">
            <div className="col-md-4 text-center order-md-1">
                <img src={triangle} alt="" />
            </div>
            <div className="col-md-8 text-md-right p-5">
                Description about key feature #1. Something 
                about this, and something about that, and 
                why this is something or other.
            </div>
        </div>
        <div className="row align-items-center my-5 py-5">
            <div className="col-md-4 order-0 text-center">
                <img src={star} alt="" />
            </div>
            <div className="col-md-8 text-md-right p-5">
                Description about key feature #1. Something 
                about this, and something about that, and 
                why this is something or other.
            </div>
        </div>
        <div className="row align-items-center my-5 py-5">
            <div className="col-md-4 text-center order-md-1">
                <img src={triangle} alt="" />
            </div>
            <div className="col-md-8 text-md-right p-5">
                Description about key feature #1. Something 
                about this, and something about that, and 
                why this is something or other.
            </div>
        </div>
    </section>
)

export default KeyFeaturesSection
