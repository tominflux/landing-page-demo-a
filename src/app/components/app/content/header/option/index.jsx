import React from 'react'
import './styles.css'


const HeaderOption = (props) => {
    return (
        <span className="header__option">
            {props.children}
        </span>
    )
}

export default HeaderOption