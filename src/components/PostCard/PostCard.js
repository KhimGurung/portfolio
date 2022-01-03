import React from 'react'
import ReadMore from '../ReadMore'


function PostCard({ post }) {
    return (
        <div className="post">
            <div className="post-image">
                <img src={ post.image } alt="" />
            </div>
            <div className="post-content">
                <h4 className="post-publish-date">{ post.publishedDate }</h4>
                <h3 className="post-title">{ post.title }</h3>
                <p>{ post.description }</p>
                <ReadMore to="#" />
            </div>
        </div>
    )
}

export default PostCard
