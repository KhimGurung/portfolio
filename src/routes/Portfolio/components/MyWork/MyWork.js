import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../../../../components/Title'

import {
    reactjs_events,
    flutter_epayment,
    flutter_vaccation,
    reactnative_bpccs,
    reactnative_rapidinfo,
    xamarinform_eticket,
} from '../../../../assets'

import WorkCard from '../../../../components/WorkCard'

const works=[
    {
        image: flutter_vaccation,
        title: "Vaccation",
        category: "Flutter",
        description: "this is testing application description for testing purpose. this is testing application description for testing purpose."
    },
    {
        image: flutter_epayment,
        title: "ePayment",
        category: "Flutter",
        description: "this is testing application description for testing purpose. this is testing application description for testing purpose."
    },
    {
        image: reactjs_events,
        title: "Events",
        category: "ReactJs",
        description: "this is testing application description for testing purpose. this is testing application description for testing purpose."
    },
    {
        image: reactnative_bpccs,
        title: "BP CCS",
        category: "React Native",
        description: "this is testing application description for testing purpose. this is testing application description for testing purpose."
    },
    {
        image: reactnative_rapidinfo,
        title: "RapidInfo",
        category: "React Native",
        description: "this is testing application description for testing purpose. this is testing application description for testing purpose."
    },
    {
        image: xamarinform_eticket,
        title: "E-Ticket",
        category: "Xamarin.Form",
        description: "this is testing application description for testing purpose. this is testing application description for testing purpose."
    }                    
]

function MyWork() {
    return (
        <section id="my-work">
            <div className="container section-wrapper">
                <Title title="My Work" />
                <div className="work-container">
                    {
                        works.map((work, index) => <WorkCard key={ index } work={ work } />)
                    }                                                                                                     
                </div>
                <div className="container my-work-btn-container">
                    <Link to="/work" className="btn btn-primary btn-lg">
                        SEE ALL MY WORK
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default MyWork
