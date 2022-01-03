import React from 'react'
import ContactForm from '../../../../components/ContactForm'
import Title from '../../../../components/Title'

function Contact() {
    return (
        <section id="contact-form-section">
            <div className="container section-wrapper">
                <Title title="Contact Me" />
                <ContactForm />
            </div>
        </section>
    )
}

export default Contact
