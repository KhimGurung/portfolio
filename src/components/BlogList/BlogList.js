import React from 'react'
import { profile, cookery, interior, business } from "../../assets"
import BlogCard from '../BlogCard'

const blogList = [
    {
        id: 1,
        title: "4 Deadly Sins of UI and UX Design You Need to Avoid",
        description: "It’s not wrong to say that perfection in web design is something that doesn’t really exist. But that doesn’t mean, It’s not wrong to say that perfection in web design is something that doesn’t really exist. But that doesn’t mean, It’s no that perfection in web design ",
        category: "Business",
        image: business,
        author: "admin",
        published_date: "26 Aug, 2020",
        profile_image: profile
    },
    {
        id: 2,
        title: "4 Deadly Sins of UI and UX Design You Need to Avoid",
        description: "It’s not wrong to say that perfection in web design is something that doesn’t really exist. But that doesn’t mean, It’s not wrong to say that perfection in web design is something that doesn’t really exist. But that doesn’t mean, It’s no that perfection in web design ",
        category: "Cookery",
        image: cookery,
        author: "admin",
        published_date: "26 Aug, 2020",
        profile_image: profile
    },
    {
        id: 3,
        title: "4 Deadly Sins of UI and UX Design You Need to Avoid",
        description: "It’s not wrong to say that perfection in web design is something that doesn’t really exist. But that doesn’t mean, It’s not wrong to say that perfection in web design is something that doesn’t really exist. But that doesn’t mean, It’s no that perfection in web design ",
        category: "Interiror",
        image: interior,
        author: "admin",
        published_date: "26 Aug, 2020",
        profile_image: profile
    } ,
    {
        id: 4,
        title: "4 Deadly Sins of UI and UX Design You Need to Avoid",
        description: "It’s not wrong to say that perfection in web design is something that doesn’t really exist. But that doesn’t mean, It’s not wrong to say that perfection in web design is something that doesn’t really exist. But that doesn’t mean, It’s no that perfection in web design ",
        category: "Business",
        image: business,
        author: "admin",
        published_date: "26 Aug, 2020",
        profile_image: profile
    }        
]

function BlogList() {
    return (
        <section>
            <div className="container blog-list section-wrapper">
                {
                    blogList.map((blog, index) => <BlogCard key={ index } blog={ blog } />)
                }
            </div>
        </section>
    )
}

export default BlogList
