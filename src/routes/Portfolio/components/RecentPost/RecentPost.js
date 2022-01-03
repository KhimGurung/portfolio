import React from 'react'
import Title from '../../../../components/Title'
import PostCard from '../../../../components/PostCard'

import { img6, img7, img9 } from '../../../../assets'

const posts = [
    {
        image: img6,
        publishedDate: '23 Nov, 2020',
        title: 'Why Lead Generation is Key for Business Growth',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
        image: img7,
        publishedDate: '23 Nov, 2020',
        title: 'Why Lead Generation is Key for Business Growth',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
        image: img9,
        publishedDate: '23 Nov, 2020',
        title: 'Why Lead Generation is Key for Business Growth',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    }        
]

function RecentPost() {
    return (
        <section id="recent-post">
            <div className="container section-wrapper">
                <Title title="Recent Posts" />
                <div className="post-container">
                    {
                        posts.map((post, index) => <PostCard key={ index } post={ post } />)
                    }
                </div>
            </div>
        </section>
    )
}

export default RecentPost
