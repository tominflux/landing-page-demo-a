import React from 'react'
import './styles.css'
import TitleUnderline from './underline'


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