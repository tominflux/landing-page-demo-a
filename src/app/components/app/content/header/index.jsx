import React from 'react'
import HeaderOption from './option'
import './styles.css'
import HeaderLogo from './logo'

const Header = (props) => {
    //
    return (
        <header className="header">
            <div className="row align-items-center">
                <div className="col-4 col-md-2 text-center">
                    <HeaderLogo />
                </div>
                <div className="offset-md-6"/>
                <div className="col-8 col-md-4">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <HeaderOption>
                                About Us
                            </HeaderOption>
                        </div>
                        <div className="col-6">
                            <HeaderOption>
                                Stay in the Loop
                            </HeaderOption>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header