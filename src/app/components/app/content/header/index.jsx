import React from 'react'
import HeaderOption from './option'
import './styles.css'

const Header = (props) => {
    //
    return (
        <header className="header">
            <div className="row">
                <div className="offset-md-8"/>
                <div className="col-md-2">
                    <HeaderOption>
                        About Us
                    </HeaderOption>
                </div>
                <div className="col-md-2">
                    <HeaderOption>
                        Stay in the Loop
                    </HeaderOption>
                </div>
            </div>
        </header>
    )
}

export default Header