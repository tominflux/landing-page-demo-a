import React from 'react'
import TitleUnderline from './underline'
import './styles.css'


const Title = (props) => {
    //
    return (
        <div className="title">
            <h1 className="title__heading">
                Something Inc.
            </h1>
            <TitleUnderline />
        </div>
    )
}


export default Title