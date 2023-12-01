import React, { useState } from 'react';
import '../Style/Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {

    const [navbar, setNavbar] = useState('navbar')
    const [nav, setNav] = useState('nav')
    const [link, setlink] = useState('link')
    const [btn, setBtn] = useState('nav-btn')
    const handleNav = () => {
        if (btn === 'nav-btn') {
            setBtn('nav-btn opcity action')
            setNavbar('navbar all')
            setNav('nav-all')
            setlink('link-all')
        } else if (btn === 'nav-btn close') {
            setBtn('nav-btn opcity action')
            setNavbar('navbar all')
            setNav('nav-all')
            setlink('link-all')
        } else {
            setBtn('nav-btn close')
            setNavbar('navbar')
            setNav('nav')
            setlink('link')
        }
    }

    return (
        <div className={navbar}>
            <div className={nav}>
                <Link to="/" className={link}>About</Link>
                <Link to="/Resume" className={link}>Resume</Link>
                <Link to="/Project" className={link}>Project</Link>
            </div>
            <div className={btn} onClick={handleNav}></div>
        </div>

    )
}

export default Navbar




