import React from 'react'

function SocialIcon({ children, link }) {
    return (
        <a  target="_blank" 
            rel="noopener noreferrer"
            className="social-icon-wrapper"
            href={ link }>
            { children }
        </a>
    )
}

export default SocialIcon
