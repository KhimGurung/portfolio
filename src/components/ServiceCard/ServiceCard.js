import React from 'react'

function ServiceCard({ service }) {
    return (
        <div className="service">
            { service.icon }
            <h3>{ service.title }</h3>
            <p>{ service.description }</p>
        </div>
    )
}

export default ServiceCard
