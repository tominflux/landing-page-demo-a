import React from 'react'
import classConcat from '../../../../../misc/classConcat'
import './styles.css'

const KeyFeaturesRow = ({ 
    imgSrc,
    children,
    invert
}) =>  {
    // Computations
    // Render
    return (
        <div className="row align-items-center my-md-4 my-md-5 py-md-5">
            <div className={classConcat(
                "col-md-4",
                "text-center",
                invert ? "text-md-left" : "text-md-right",
                invert ? "order-md-1" : null
            )}>
                <img 
                    src={imgSrc} 
                    alt="" 
                    className="key-features-row__img"
                />
            </div>
            <div className={classConcat(
                "col-md-8", 
                "p-4",
                "p-md-5"
            )}>
                <p className={classConcat(
                    "key-features-row__paragraph",
                    "text-center",
                    invert ? "text-md-right" : "text-md-left"
                )}> 
                    {children}
                </p>
            </div>
        </div>
    )
}

export default KeyFeaturesRow
