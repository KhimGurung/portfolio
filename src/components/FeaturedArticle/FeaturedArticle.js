import React from 'react'
import { featured_article } from "../../assets"

function FeaturedArticle() {
    return (
        <section>
            <div className="container">
                <div className="featured-article">
                    <div className="absolute-fill gradient-background" />   
                    <div className="absolute-fill featured-article-info">
                        <p>FEATURED ARTICLE</p>
                        <h2>20 Stellar Science Fiction After Effects Templates</h2>
                        <p>
                            Social media has been part of our online lives for a couple of decades now. That’s a long time when it comes to the internet, but relatively new as a form of human communication…
                        </p>
                    </div>             
                    <img src={ featured_article } alt="" />
                </div>
            </div>
        </section>
    )
}

export default FeaturedArticle
