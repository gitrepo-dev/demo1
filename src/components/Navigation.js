import React, { useState } from 'react'
import logo from '../assets/logo.png'
import whitemenu from '../assets/white.png'

export default function Navigation() {

    const [isMenu, setIsMenu] = useState(false)

    const toggleMenu = () => {
        console.log('hello world')
    }
    

    return (
        <div className="nav-wrapper">
            <img src={logo} alt="11studios" className="logo" />
            <nav className="header-nav">
                <ul>
                    <li><a href="/mission">Mission</a></li>
                    <li><a href="/chain-development">Chain development</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/aboutus">AboutUs</a></li>
                    <li><img src={whitemenu} className="menu-icon pointer" alt="menu" onClick={()=>toggleMenu()} /> </li>
                </ul>
            </nav>
        </div>
    )
}
