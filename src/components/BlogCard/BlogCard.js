import React from 'react'

function BlogCard({ blog }) {
    return (
        <div className="blog-card">
            <div className="blog-image-wrapper">
                <img src={ blog.image } />
            </div>
            <div className="blog-info">
                <p className="blog-category">{ blog.category }</p>
                <h2>{ blog.title }</h2>
                <p>{ blog.description }</p>
                <div className="blog-author">
                    <div className="profile-image-wrapper">
                        <img src={ blog.profile_image } />
                    </div>
                    <div className="blog-author-info">
                        <p>{ blog.author }</p>
                        <p>{ blog.published_date }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
