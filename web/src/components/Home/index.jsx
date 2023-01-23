import React from "react"
import './style.scss'

import Light from '../../assets/light.png'
import Dark from '../../assets/dark.png'

import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

export default function Home({theme}){
    return(
        <div className={`Home home-${theme}`}>
            <div className="containerHome">
                <section className="containerInfo">
                    <h1>Star Wars</h1>
                    <h3>{theme} theme</h3>
                    <button className={`btn-${theme}`}>{theme}</button>
                </section>
                <div className="containerImg" style={theme === 'Light' ? {backgroundColor: 'rgba(0, 0, 0, 0.1)'} : {backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
                    <img className={`img-${theme}`} src={theme === "Light" ? Light : Dark}/>
                </div>
            </div>
            <div className="icons">
                <a className={`a-${theme}`} target="_blank" href="https://www.linkedin.com/in/yuriferr"><BsLinkedin size={25}/></a>
                <a className={`a-${theme}`} target="_blank" href="https://github.com/Yuriferr"><BsGithub size={25}/></a>
                <a className={`a-${theme}`} href="mailto:yurifernandespreto@gmail.com"><MdEmail size={30}/></a>
            </div>
        </div>
    )
}