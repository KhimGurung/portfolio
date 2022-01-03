import React from 'react'

import profileImg from '../../../../assets/images/me.png'
import Title from "../../../../components/Title"

function AboutMe() {
    return (
        <section id="about-me">
            <div className="container section-wrapper">
                <Title title="About Me" />
                <div className="aboutme-container">
                    <div>
                        <img alt="#" src={profileImg} width="100%"/>
                    </div>
                    <div>
                        <h3>Hello I'm Web and Mobile Application Developer from Fulda, Germany. I hold a master degree in Computer Science from Hochschule Fulda.</h3>
                        <p> <b>Name : </b> Khim Bahadur Gurung</p>
                        <p> <b>Date of birth : </b> 6 August 1991</p>
                        <p> <b>Email : </b> gurungkhim100@gmail.com</p>
                        <p> <b>Phone : </b> +49 13548274</p>
                        <p> <b>Address : </b> Leipziger Str. 14436037 Fuld</p>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
