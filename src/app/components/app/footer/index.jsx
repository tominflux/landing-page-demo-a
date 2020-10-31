import React from 'react'
import classConcat from '../../../misc/classConcat'

const Footer = () => (
    <footer className={classConcat(
        "container-fluid",
        "px-md-4",
        "py-4",
        "footer",
    )}>
        <div className="row">
            <div className="col-md-4 text-left">
                Left
            </div>
            <div className="col-md-4 text-center">
                Center
            </div>
            <div className="col-md-4 text-right">
                Right
            </div>
        </div>
    </footer>
)

export default Footer
