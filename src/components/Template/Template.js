import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'

function Template({ children }) {
    return (
        <>
            <Nav />
                <div className="main-container">
                    { children }
                </div>
            <Footer />
        </>
    )
}

export default Template
