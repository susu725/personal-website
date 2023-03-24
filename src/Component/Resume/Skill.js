import React from "react"
import '../../Style/Skill.css'

function Skill(props) {
    const detail = props.details.map(function (detail) {
        return <p>{detail}</p>
    })

    return (
        <div className='skill-card'>
            <h3 className='skill-title'>{props.skill.title}</h3>
            <div className='skill-details'>
                {detail}
            </div>
            <p className='skill-description'>{props.skill.description}</p>
        </div>
    )
}

export default Skill