import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import FBicon from '../img/facebook-icon.svg'
import INicon from '../img/linkedin-icon.svg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

function Socials() {

  const social = useRef();
  const social_tl = useRef();

  useGSAP(()=> {

    social_tl.current = gsap
      .timeline()

      .from(".socials", {
        opacity:0,
        x: "-30",
        duration: 1,
        delay: 4
      });

  }, {scope: social});

  return (
    <div className="social-wrapper" ref={social}>
      <div className="socials">
        <Link to="https://www.facebook.com/jhunry.voloso/" target="_blank">
          <img src={FBicon} alt="" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/jhun-raymond-voloso-2b7398184/"
          target="_blank"
        >
          <img src={INicon} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Socials