import React from "react"
import '../../Style/Experience.css'

function Experience(props) {
    const description = props.descriptions.map(function (description) {
        return <p className='exp-description'>{description}</p>
    })

    return (
        <div className='exp-card'>
            <p className="exp-date">{props.exp.date}</p>
            <div className="exp-content">
                <h3 className='exp-title'>{props.exp.title}</h3>
                {description}
            </div>
        </div>
    )
}

export default Experience