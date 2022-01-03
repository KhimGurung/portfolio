import React from 'react'

function ContactForm() {
    return (
        <form action="/" className="contact-form">
            <div className="contact-form-firt-row">
                <input type="text" id="name" name="name" placeholder="Name*" />
                <input type="text" id="email" name="email" placeholder="Your email*"/>
            </div>
            <input type="text" id="subject" name="subject" placeholder="Subject"/>
            <textarea id="message" name="w3review" rows="8" cols="50" placeholder="Message" />
            <input type="submit" value="Submit" className="btn btn-primary btn-lg" />
        </form>
    )
}

export default ContactForm
