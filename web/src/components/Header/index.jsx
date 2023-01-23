import React from "react"
import './style.scss'

import Switch from 'react-switch'

import Logo from '../../assets/logoBranca.png'

export default function Header({toggleTheme, theme}){
    return(
        <header className={theme}>
            <img src={Logo}/>
            <Switch onChange={toggleTheme} checked={theme === 'Dark'} width={40} height={10} handleDiameter={20} checkedIcon={false} uncheckedIcon={false} offColor="#333" onColor="#333"/>
        </header>
    )
}