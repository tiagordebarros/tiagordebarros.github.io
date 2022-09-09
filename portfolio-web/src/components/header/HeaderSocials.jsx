import React from "react";
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
// import { BsYoutube } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md'


function HeaderSocials() {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/tiagoribeirodebarros/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/tiagordebarros" target="_blank" rel="noreferrer"><FaGithub /></a>
            {/* <a href="https://www.youtube.com/channel/UCaA8zVzGntGTrYCL7_0EpiA" target="_blank" rel="noreferrer"><BsYoutube /></a> */}
            <a href="mailto:tiagordebarros@gmail.com?subject=Contato Portfólio Web" target="_blank" rel="noreferrer"><MdEmail /></a>
        </div>
    );
}

export default HeaderSocials;
