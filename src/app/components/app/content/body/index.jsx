import React from 'react'
import Title from './title'
import './styles.css'
import Gfx from './gfx'

const Body = (props) => {
    //
    return (
        <section className="body">
            <div className="row align-items-center">
                <div className="col-md-5 text-center">
                    <Gfx />
                </div>
                <div className="col-md-7">
                    <Title />
                </div>
            </div>
        </section>
    )
}

export default Body