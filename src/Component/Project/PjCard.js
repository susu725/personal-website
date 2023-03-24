import React from 'react'
import '../../Style/PjCard.css'
import { Link } from 'react-router-dom'

function Card(props) {
    return (
        <Link to={props.project.url} target="_blank" className='project-card'>
            <div className='project-img'>
                <img src={props.project.img} alt='' />
            </div>
            <div className='project-txt'>
                <h3 className='project-title'>{props.project.title}</h3>
                <p className='project-description'>{props.project.description}</p>
            </div>
        </Link>
    )
}

export default Card

