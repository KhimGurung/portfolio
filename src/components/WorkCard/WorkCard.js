import React from 'react'
import { Link } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'

function WorkCard({ work }) {
    return (
        <div className="work">
            <div className="work-image">
                <img src={ work.image } alt="" />
            </div>
            <div className="work-info">
                <p className="category-name">{ work.category }</p>
                <h3>{ work.title }</h3>
                <LinesEllipsis
                    text={ work.description }
                    maxLine='3'
                    ellipsis='...'
                    basedOn='letters'
                    className="short-text"
                    />
                <div className="links">
                    <Link to="#" className="btn btn-secondary btn-sm">Preview</Link>
                    <Link to="/work-detail" state= { work } className="btn btn-secondary btn-sm">Detail</Link>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
