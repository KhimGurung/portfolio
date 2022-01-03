import React from 'react'
import { MdDesktopWindows, MdStayCurrentPortrait } from "react-icons/md"
import ServiceCard from '../../../../components/ServiceCard'

import Title from '../../../../components/Title'

const services = [
    {
        icon: <MdDesktopWindows className="service-icon" />,
        title: "Web Development",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis aspernatur expedita, iure earum enim beatae hic, unde consequatur placeat reprehenderit!"
    },
    {
        icon: <MdDesktopWindows className="service-icon" />,
        title: "UI / UX Design",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis aspernatur expedita, iure earum enim beatae hic, unde consequatur placeat reprehenderit!"
    },
    {
        icon: <MdStayCurrentPortrait className="service-icon" />,
        title: "Mobile Development",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis aspernatur expedita, iure earum enim beatae hic, unde consequatur placeat reprehenderit!"
    }        
]

function MyServices() {
    return (
        <section id="my-services">
            <div className="container section-wrapper">
                <Title title="My Services" />
                <div className="myservices-container">
                    {
                        services.map((service, index) => <ServiceCard key={ index } service={ service } />)
                    }
                </div>
            </div>
        </section>
    )
}

export default MyServices
