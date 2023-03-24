import React from 'react'
import '../../Style/AbCard.css'
import { Link } from "react-router-dom";
import susu from '../../Image/susu.jpg'

function About() {
    return (
        <div className='about-card'>
            <div className='about-img'>
                <img src={susu} alt="" />
            </div>
            <div className='about-description'>
                <h1>HELLO</h1>
                <p>我是蘇奕潔，畢業於資訊管理系，期間接觸過Java、JavaScript、Python等程式語言，也曾修讀前端APP課程，將其運用至畢業專題並獲得實務專題競賽優勝佳績。目前朝著前端工程師的方向努力前進，畢業後從事資訊相關工作，主要負責私有雲協助建置、主機維護管理、網站架設等。</p>
                <div className='btn'>
                    <Link to="/Resume" className='button'>Resume</Link>
                    <Link to="/Project" className='button'>Project</Link>
                    {/* <Link target="_blank" to="https://tw.alphacamp.co/" className='button'>Resume</Link> */}
                </div>
            </div>
        </div>

    )
}

export default About;