import React, { useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import PhoneIcon from "../img/ph_phone-light.svg";
import MailIcon from "../img/mail-icon.svg";
import ArrowRightUp from "../img/arrow-right-up.svg";
import ArrowDown from "../img/arrow-down.svg";
import Download from "../img/download.svg";
import skype from "../img/skype.svg";

import RESUME from "../assets/resume.pdf";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SocialFooter from "../components/SocialFooter";

function HireMe() {
  const hire = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .from(["#title-1", "#sub-title"], {
          opacity: 0,
          y: "+=30",
          duration: 1,
          stagger: 0.5,
        })

        .from(["#contact", "#email"], {
          opacity: 0,
          y: "-=30",
          duration: 0.8,
          stagger: 0.5,
        })
        .from(["#resume", "#social-footer"], {
          opacity: 0,
          duration: 0.8,
          stagger: 0.8
        });
    },
    { scope: hire }
  );

  // const handleDownload = ()=>{
  //   const pdfURL = resume;
  //   const a = document.createElement('a');
  //   a.href = pdfURL;
  //   a.download = 'JhunVoloso-Resume.pdf';
  //   document.appendChild(a);
  //   a.click();
  //   document.removeChild(a);
  // }

  return (
    <MainLayout>
      <div id="banner" className="container" ref={hire}>
        <div>
          <h2 id="title-1" className="title">
            Hire Me
          </h2>
          <p
            id="sub-title"
            className="fs-18 fw-300 txt-light-60 txt-center"
            style={{ lineHeight: 1.8 }}
          >
            Below are my contact details and Resume. <br />
            Please don't hesitate to call or leave a message.
          </p>
        </div>

        <div>
          <div className="display-flex dir-col gap-30">
            {/* Number */}
            <div
              id="contact"
              className="display-flex dir-recent-proj-wrapper gap-20"
            >
              <img src={PhoneIcon} alt="" />
              <span className="txt-light fs-16 fw-300">+63 928 275 9392</span>
            </div>

            {/* E-mail */}
            <div
              id="email"
              className="display-flex dir-recent-proj-wrapper gap-20"
            >
              <img src={MailIcon} alt="" />
              <span className="txt-light fs-16 fw-300">
                jhunvoloso@gmail.com
              </span>
            </div>

            {/* Skype*/}
            <div
              id="email"
              className="display-flex dir-recent-proj-wrapper gap-20"
            >
              <img src={skype} alt="" />
              <span className="txt-light fs-16 fw-300">jhunry.voloso</span>
            </div>
          </div>
        </div>

        <div id="resume" className="display-flex dir-col gap-10">
          <a
            href={RESUME}
            download="Jhun_Raymond_Voloso-Resume.pdf"
            target="_blank"
            className="btn-outline"
          >
            Download Resume{" "}
            <svg
              id="download"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 3V12.586L16.5 9.086L17.914 10.5L12 16.414L6.086 10.5L7.5 9.086L11 12.586V3H13ZM4.5 14V19H19.5V14H21.5V21H2.5V14H4.5Z"
                fill="white"
              />
            </svg>
          </a>
        </div>

        <div id="social-footer">
          <SocialFooter />
        </div>
      </div>
    </MainLayout>
  );
}

export default HireMe;
