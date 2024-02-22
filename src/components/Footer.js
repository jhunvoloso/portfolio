import React, { useRef } from "react";
import PhoneIcon from '../img/ph_phone-light.svg'
import MailIcon from '../img/mail-icon.svg'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";



function Footer() {
  const foot = useRef();
  const foot_tl = useRef();

  useGSAP(() => {
    foot_tl.current = gsap.timeline()
    .from(".footer-wrapper", {
      opacity: 0,
      y: "+=30",
      duration: 1,
      delay: 4
    });


  }, {scope: foot});

  return (
    <div className="footer" id="footer" ref={foot}>
      <div className="footer-wrapper">
        <div className="context">
          <img src={PhoneIcon} alt="" />
          <span className="txt-light fs-14 fw-300">+63 928 275 9392</span>
        </div>
        <div className="context">
          <img src={MailIcon} alt="" />
          <span className="txt-light fs-14 fw-300">jhunvoloso@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
