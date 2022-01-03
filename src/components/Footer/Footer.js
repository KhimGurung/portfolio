import React from 'react'
import SocialIcon from '../SocialIcon'
import { AiOutlineTwitter } from "react-icons/ai"
import { FaLinkedinIn, FaXing, FaFacebookF } from "react-icons/fa"
import { links } from "../../constants"

function footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-left">
                    <h3 className="logo">PORTFOLIO</h3>
                    <span>Copyright ©2021 All rights reserved<br />
                    This website is designed and developed by me.</span>
                </div>
                <div className="footer-right">
                    <h3 className="logo">STAY CONNTECTED</h3>
                    <div className="social-icons">
                        <SocialIcon>
                            <AiOutlineTwitter />
                        </SocialIcon>
                        <SocialIcon link={ links.linkedin }>
                            <FaLinkedinIn />
                        </SocialIcon>
                        <SocialIcon  link={ links.xing }>
                            <FaXing />
                        </SocialIcon>
                        <SocialIcon>
                            <FaFacebookF />
                        </SocialIcon>       
                    </div>                                                     
                </div>
            </div>
        </footer>
    )
}

export default footer
