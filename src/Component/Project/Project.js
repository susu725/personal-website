import React from 'react'
import '../../Style/Project.css'
import Navbar from '../Navbar'
import PjCard from './PjCard'
import Footer from '../Footer'

function Project(props) {
    const project = props.projects.map(function (project) {
        return <PjCard key={project.id} project={project} />
    })

    return (
        <div className='project'>
            <Navbar />
            <div className='IT-project'>
                <h1>Project</h1>
                <div className='projects'>{project}</div>
            </div>
            <Footer />
        </div>

    )
}

export default Project