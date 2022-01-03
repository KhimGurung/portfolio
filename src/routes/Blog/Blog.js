import React from 'react'
import BlogCard from '../../components/BlogCard/BlogCard'
import FeaturedArticle from '../../components/FeaturedArticle'
import Nav from '../../components/Nav'
import PageTitle from '../../components/PageTitle'
import Footer from "../../components/Footer"
import BlogList from '../../components/BlogList'
import MainBody from '../../components/MainBody'

function Blog() {
    return (
        <div className="safe-area">
            <Nav />
            <MainBody>
                <PageTitle title="Blog" />
                <FeaturedArticle />
                <BlogList />
            </MainBody>
            <Footer />
        </div>
    )
}

export default Blog
