import React from 'react'

function Title({ title }) {
    return (
        <div className="section-title">
            <h2>{ title }</h2>
            <div className="title-underline" />
        </div>
    )
}

export default Title
