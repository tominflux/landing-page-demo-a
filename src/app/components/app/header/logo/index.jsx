import React from 'react'
import logoSvg from './orbits.svg'
import './styles.css'

const HeaderLogo = () => (
    <img 
        className="header__logo"
        src={logoSvg}
        alt="Orbits icon"
    />
)

export default HeaderLogo