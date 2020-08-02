import React from 'react'
import HeaderOption from './option'
import './styles.css'
import HeaderLogo from './logo'

const Header = (props) => {
    //
    return (
        <header className="header">
            <div className="row align-items-center">
                <div className="col-md-2 text-center">
                    <HeaderLogo />
                </div>
                <div className="offset-md-6"/>
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