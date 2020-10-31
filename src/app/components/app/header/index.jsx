import React from 'react'
import HeaderOption from './option'
import HeaderLogo from './logo'
import './styles.css'

const Header = () => (
    <header className="header">
        <div className="row">
            <div className="col-4 col-md-2 text-center">
                <HeaderLogo />
            </div>
            <div className="offset-md-3"/>
            <div className="col-8 col-md-7 px-3">
                <div className="row align-items-center">
                    <div className="col-3">
                        <HeaderOption>
                            Nav Link #1
                        </HeaderOption>
                    </div>
                    <div className="col-3">
                        <HeaderOption>
                            Nav Link #2
                        </HeaderOption>
                    </div>
                    <div className="col-3">
                        <HeaderOption>
                            Nav Link #3
                        </HeaderOption>
                    </div>
                    <div className="col-3">
                        <HeaderOption>
                            Nav Link #4
                        </HeaderOption>
                    </div>
                </div>
            </div>
        </div>
    </header>
)

export default Header