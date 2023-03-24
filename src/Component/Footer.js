import React from "react";
import '../Style/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Footer() {
    return (
        <div className="footer">
            <div className="personal-information">
                <div className="phone">
                    <p><FontAwesomeIcon className="icon" icon={faPhone} />Phone</p>
                    <p>0921007182</p>
                </div>
                <div className="E-mail">
                    <p><FontAwesomeIcon className="icon" icon={faEnvelope} />E-mail</p>
                    <p>C107156140@nkust.edu.tw</p>
                </div>
                <div></div>
                <div className="copyright">
                    <p>© 2023 SU</p>
                    <p>All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer