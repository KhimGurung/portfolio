import React, { useState } from 'react'
import { MdMenu } from "react-icons/md"
import { useLocation } from 'react-router-dom'


function Nav() {

    const [showMenu, setShowMenu] = useState(false)
    const [navbarActive, setNavbarActive] = useState(false)

    const { pathname } = useLocation();

    const _setShowMenu = () => {
        setShowMenu(prevState => !prevState)
    }

    const changeBackground = () => {
        if(window.scrollY >= 30)
            setNavbarActive(prevState => true)
        else
            setNavbarActive(prevState => false)
    }
    
    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={ navbarActive ? "navbar active" : "navbar"}>
            <div className="container nav-container">
                <div className="logo-container flex-row">
                    <h3 className="logo">
                        <a href="/">
                            PORTFOLIO
                        </a>
                    </h3>
                    <MdMenu className="toggleMenuIcon" onClick={ _setShowMenu } />
                </div>
                <div className={ 'menu-container ' + (showMenu ? '' : 'hide-menu ') + (navbarActive ? 'shift-menu' : '')}>
                    <ul className="menu container">
                        <li><a href={ pathname === "/" ? "#my-work" : "/work"}>Portfolio</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
