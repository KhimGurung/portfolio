import React from 'react'

function PageTitle({ title="Page Title" }) {
    return (
        <section>
            <div className="container page-title">
                <h1>{ title }</h1>
                <hr />
            </div>
        </section>
    )
}

export default PageTitle
