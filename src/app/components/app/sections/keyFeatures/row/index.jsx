import React from 'react'
import classConcat from '../../../../../misc/classConcat'
import FadeTransition, { FADE_DIRECTION } from '../../../util/fadeTranstiion'
import './styles.css'

const KeyFeaturesRow = ({ 
    index,
    imgSrc,
    children,
    invert
}) =>  {
    // Computations
    // Render
    return (
        <div className={classConcat(
            "row",
            "align-items-center",
            "my-md-5",
            "py-md-5",
            "key-features-row"
        )}>
            <div className={classConcat(
                "col-md-4",
                "text-center",
                invert ? "text-md-left" : "text-md-right",
                invert ? "order-md-1" : null
            )}>
                <FadeTransition
                    tag="img" 
                    direction={invert ? FADE_DIRECTION.RIGHT : FADE_DIRECTION.LEFT}
                    delay={`${0.11 + 0.1 * index}s`}
                    duration="0.88s"
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
                <FadeTransition
                    className={classConcat(
                        "key-features-row__paragraph",
                        "text-center",
                        invert ? "text-md-right" : "text-md-left"
                    )}
                    direction={FADE_DIRECTION.BOTTOM}
                    delay={`${0.33 + 0.11 * index}s`}
                    duration="1.44s"
                > 
                    {children}
                </FadeTransition>
            </div>
        </div>
    )
}

export default KeyFeaturesRow
