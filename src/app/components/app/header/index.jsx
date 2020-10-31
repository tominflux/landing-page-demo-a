import React from 'react'
import HeaderOption from './option'
import HeaderLogo from './logo'
import classConcat from '../../../misc/classConcat'
import './styles.css'

const Header = () => (
    <header className={classConcat(
        "container-fluid",
        "p-0",
        "p-md-3",
        "header"
    )}>
        <div className="row align-items-center">
            <div className="col-4 col-md-2 col-lg-2 text-center">
                <HeaderLogo />
            </div>
            <div className="offset-md-1 offset-lg-3"/>
            <div className="d-none d-md-block col-md col-lg-7 px-3">
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