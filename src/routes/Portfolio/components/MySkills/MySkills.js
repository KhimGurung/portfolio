import React from 'react'
import Title from '../../../../components/Title'
import Skill from '../Skill/Skill'

const languages = ["JavaScript", "Python", "PHP", "C#", "HTML", "CSS"]
const libraires = ["React Native", "ReactJs", "NodeJs", "Flask", "Xamarin.Forms", "Flutter", "Sass"]

function MySkills() {
    return (
        <section id="my-skills">
            <div className="container section-wrapper">
                <Title title="My Skills" />
                <div className="skills">
                    <div className="language">
                        {
                            languages.map(language => <Skill key={ language } skill={ language } />)
                        }
                    </div>
                    <div className="library">
                        {
                            libraires.map(library => <Skill key={ library } skill={ library } />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MySkills
