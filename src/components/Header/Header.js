import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from '../../assets/images/hero1.jpg'

function Header() {
    return (
        <header>
            <div className="header-background">
                <div className="banner-image-container">
                    <img src={ profileImg } alt=""/>
                </div>
            </div>         
            <div className="header-container">
                <div className="container">
                    <div className="banner-text-container">
                        <h1>Hello, I am Khim</h1>
                        <h3 className="banner-subtitle">A FULLSTACK WEB & MOBILE APPLICATION DEVELOPER</h3>
                        <Link to="/work" className="btn btn-primary btn-lg">
                            SEE MY WORK
                        </Link>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d = "M0,60C20,5,30,80,45,87C52,87,50,90,77,25Q88,5,100,0L100,100L0,100Z" />
            </svg>
        </header>
    )
}

export default Header

