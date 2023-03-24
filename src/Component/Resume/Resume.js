import React from 'react'
import '../../Style/Resume.css'
import Navbar from '../Navbar'
import Experience from './Experience'
import Skill from './Skill'
import Footer from '../Footer'

function Resume(props) {
    const exps = props.exps.map(function (exp) {
        return <Experience key={exp.id} exp={exp} descriptions={exp.descriptions} />
    })

    const skills = props.skills.map(function (skill) {
        return <Skill key={skill.id} skill={skill} details={skill.details} />
    })

    return (
        <div className='resume'>
            <Navbar />
            <div className='exp'>
                <h1>Experience</h1>
                <div className='exps'>{exps}</div>
            </div>
            <div className='skill'>
                <h1>Skill</h1>
                <div className='skills'>{skills}</div>
            </div>
            <Footer />
        </div>
    )
}

export default Resume