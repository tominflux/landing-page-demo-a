import React from 'react'
import circle from './circle.svg'
import './styles.css'

const UniqueSectionPoints = () => (<>
    <div className="row my-5">
        <div className="col-md-4 text-center">
            <div>
                <img
                    src={circle}
                    alt=""
                    className="unique-points__img"
                />
            </div>
            <div className="my-4">
                <h3>
                    Unique Factor #1
                </h3>
            </div>
        </div>
        <div className="col-md-4 text-center">
            <div>
                <img
                    src={circle}
                    alt=""
                    className="unique-points__img"
                />
            </div>
            <div className="my-4">
                <h3>
                    Unique Factor #2
                </h3>
            </div>
        </div>
        <div className="col-md-4 text-center">
            <div>
                <img
                    src={circle}
                    alt=""
                    className="unique-points__img"
                />
            </div>
            <div className="my-4">
                <h3>
                    Unique Factor #3
                </h3>
            </div>
        </div>
    </div>
</>)

export default UniqueSectionPoints
