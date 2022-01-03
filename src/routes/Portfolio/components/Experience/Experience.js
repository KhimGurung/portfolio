import React from 'react'
import Title from '../../../../components/Title/Title';

const education = [
    {
        title: "Global Software Development",
        year: "2017 - 2020",
        institute: "Fulda University of Applied Science"
    },
    {
        title: "Bachelor of Computer Science",
        year: "2010 - 2014",
        institute: "LA Grandee International Collage"
    }
]

const experience = [
    {
        title: "Web and Mobile Application Developer",
        year: "since 06/2020",
        institute: "OB//CC Gmbh & CO. KG",
        task: [
            "Developing cross platform mobile application using React Native",
            "Developing web application using ReactJS",
            "Deploying mobile application to App Store and Play Store"
        ]
    },
    {
        title: "Thesis student",
        year: "12/2019 - 05/2020",
        institute: "OB//CC Gmbh & CO. KG",
        task: [
            "Completed master thesis titled 'Comprehensive Analysis of Cross- Platform Native Mobile Application Development Tools (React Native, Flutter, Xamarin.Forms)'",
            "Implemented 'E-Ticket' mobile UI in React Native, Flutter and Xamarin.Forms for thesis"
        ]
    },
    {
        title: "Mobile application developer - Working student",
        year: "05/2019 - 11/2019",
        institute: "OB//CC Gmbh & CO. KG",
        task: [
            "Developed cross platform mobile application in React Native and Xamarin.Forms"
        ]
    },
    {
        title: "Mobile application developer - Internee",
        year: "12/2018 - 04/2018",
        institute: "OB//CC Gmbh & CO. KG",
        task: [
            "Developed cross platform mobile application in Xamarin.Forms",
            "Developed windows application using Xamarin.Forms"
        ]
    }, 
    {
        title: "Mobile application developer - Working student",
        year: "04/2018 - 11/2018",
        institute: "OB//CC Gmbh & CO. KG",
        task: [
            "Developed cross platform mobile application in Ionic, Xamarin.Forms"
        ]
    }, 
    {
        title: "Web Developer",
        year: "02/2015 - 01/2016",
        institute: "VIRTUAL WEB TECHNOLOGY",
        task: [
            "Front end development using HTML, CSS, JavaScript",
            "Back end development using Laravel PHP framework",
            "Website development using free CMS (Joomla)"
        ]
    }, 
    {
        title: "PHP Web Developer",
        year: "03/2014 - 05/2014",
        institute: "GENESIS SOFTWARE SOLUTION",
        task: [
            "Front end development using HTML, CSS, JavaScript",
            "Back end development using CodeIgniter PHP framework"
        ]
    },            
]

function Experience() {
    return (
        <section id="ene">
            <div className="container section-wrapper">
                    <div className="sub-container">
                        <div>
                            <Title title="Education" />
                        </div>
                        <div className="timeline">
                            <ul>
                                {
                                    education.map((education, index) => (
                                        <li key={ index }>
                                            <h3>{ education.title }</h3>
                                            <p>{ education.year }</p>
                                            <p>{ education.institute }</p>
                                        </li>         
                                    ))
                                }                                                   
                            </ul>
                        </div>
                    </div>
                    <div className="sub-container">
                        <div>
                            <Title title="Experience" />
                        </div>
                        <div className="timeline">
                            <ul>
                                {
                                    experience.map((experience, index) => (
                                        <li key={ index }>
                                            <h3>{ experience.title }</h3>
                                            <p>{ experience.institute } ({ experience.year })</p>
                                            <ul className="task">
                                                {
                                                    experience.task.map((task, index) => <li key={ index }><p>{task}</p></li>)
                                                }
                                            </ul>
                                        </li>  
                                    ))
                                }                                                 
                            </ul>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Experience
