import React from 'react'
import '../../Style/About.css'
import Navbar from '../Navbar'
import Abcard from './AbCard'
import Footer from '../Footer'

function About() {
    return (
        <div className='about'>
            <Navbar />
            <Abcard />
            <Footer />
        </div>
    )
}

export default About;