import React from 'react'
import { MdTrendingFlat } from "react-icons/md"
import { Link } from 'react-router-dom'

function ReadMore({ to }) {
    return (
        <div className="post-read-more">
            <Link to={ to }>read more</Link>
            <MdTrendingFlat />
        </div>
    )
}

export default ReadMore
