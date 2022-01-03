import React from 'react'
import Footer from '../../components/Footer'
import MainBody from '../../components/MainBody'
import Nav from '../../components/Nav'
import PageTitle from '../../components/PageTitle'
import ContactForm from '../../components/ContactForm'

import { worldmap } from "../../assets"

function Contact() {
    return (
        <div className="safe-area">
            <Nav />
            <MainBody>
                <PageTitle title="Contact" />
                <div className="container contact">
                    <img src={ worldmap } />
                    <div className="contact-info">
                        {/* <h1>Khim Bahadur Gurung </h1> */}
                        <p>Khim Bahadur Gurung </p>
                        <p>ADDRESS: Moltke street 35, 36039 Fulda </p>
                        <p>EMAIL: gurngkhim100@gmail.com </p>
                    </div>
                    <ContactForm />
                </div>
            </MainBody>
            <Footer />
        </div>
    )
}

export default Contact
