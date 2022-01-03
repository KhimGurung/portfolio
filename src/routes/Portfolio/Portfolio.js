import React from 'react'

import Footer from "../../components/Footer"

import Nav from "../../components/Nav"
import Header from "../../components/Header"
import AboutMe from './components/AboutMe'
import MyServices from './components/MyServices'
import MySkills from './components/MySkills'
import Experience from './components/Experience'
import MyWork from './components/MyWork'
import SVG from './components/SVG'
import ContactMe from './components/ContactMe'
import RecentPost from './components/RecentPost'
import Contact from './components/Contact'

function Portfolio() {
    return (
        <>
            <Nav />
            <Header />
            <AboutMe />
            <MyServices />
            <MySkills />
            <Experience />
            <SVG />
            <MyWork />
            <ContactMe />
            <RecentPost />
            <Contact />
            <Footer />
        </>
    )
}

export default Portfolio
