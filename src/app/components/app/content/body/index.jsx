import React from 'react'
import Title from './title'
import './styles.css'

const Body = (props) => {
    //
    return (
        <section className="body">
            <div className="row align-items-center">
                <div className="col-md-5 text-center">
                    Hi
                </div>
                <div className="col-md-7">
                    <Title />
                </div>
            </div>
        </section>
    )
}

export default Body