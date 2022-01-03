import React, { useState } from 'react'
import WorkCard from '../../components/WorkCard'
import Title from '../../components/Title'
import { reactjsWork, reactnativeWork, flutterWork, xamarinformWork } from '../../mock'
import { shuffle } from "../../services"
import Template from '../../components/Template'

const allWorks=shuffle([
    ...reactjsWork,
    ...reactnativeWork,
    ...flutterWork,
    ...xamarinformWork
])

const technologies = ["All", "ReactJs", "React Native", "Flutter", "Xamarin.Form"]

function Work() {

    const[selectedCategory, setSelectedCategory] = useState("All")
    const[workGroup, setWorkGroup] = useState(allWorks)

    const _filterWork = (radio) => {
        let name = radio.currentTarget.value;
        
        switch (name) {
            case "All":
                setWorkGroup(() => allWorks)
                break;
            case "ReactJs":
                setWorkGroup(() => reactjsWork)
                break;
            case "React Native":
                setWorkGroup(() => reactnativeWork)
                break;
            case "Flutter":
                setWorkGroup(() => flutterWork)
                break; 
            case "Xamarin.Form":
                setWorkGroup(() => xamarinformWork)
                break;                              
            default:
                break;
        }

        setSelectedCategory(() => name )
    }

    return (
        <Template>
            <section className="container safe-area">
                <div className="portfolio">
                    <div className="title-container">
                        <Title title="Portfolio" />
                        <div className="technologies">
                            {
                                technologies.map((technology, index) => {
                                    return  <div key={ index }>
                                                <input  type="radio" 
                                                        id={ technology } 
                                                        name="category" 
                                                        checked={ technology === selectedCategory ? true : false}
                                                        onChange={ _filterWork }
                                                        value={ technology }/>
                                                <label htmlFor={ technology }>{ technology }</label>
                                            </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="work-container">
                        {
                            workGroup.map((work, index) => <WorkCard key={ index } work={ work } />)
                        }
                    </div>
                </div>
            </section>
        </Template>
    )
}

export default Work
