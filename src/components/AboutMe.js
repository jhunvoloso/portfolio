import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import PersonIcon from "../img/person.svg";
import Educ from "../img/education.svg";
import Skill from "../img/skill.svg";

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const about = useRef();
  const about_tl = useRef();
 

  useGSAP(
    () => {
      about_tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#about-wapper",
            start: "top center",
            end: "bottom center",
            scrub: false,
            //markers: true,
          },
        })

        .from(["#title-1", "#sub-title"], {
          opacity: 0,
          y: "-=30",
          duration: 1,
          stagger: 0.3,
        })

        .from(".card", {
          opacity: 0,
          y: "+=30",
          duration: 1.5,
          stagger: 0.3,
        });
    },
    { scope: about }
  );

  return (
    <div id="about-me" className="container" ref={about}>
      <div id="about-wapper" className="display-flex dir-col gap-100">
        <div>
          <h2 id="title-1" className="title">
            About me
          </h2>
          <p
            id="sub-title"
            className="fs-16 txt-light-60 txt-center"
            style={{ lineHeight: 1.8 }}
          >
            A passionate UX / UI Designer & Front-End Developer from the
            Philippines with 7+ years of <br />
            experience. I have helped a lot of companies achieve their goals by{" "}
            <br />
            Designing and Developing user friendly UI, seamless User Experience{" "}
            <br />
            and helping bottleneck designs to developers.
          </p>
        </div>

        <div className="display-flex display-flex-center dir-row gap-sb gap-md-100 dir-md-col">
          <div className="display-flex dir-col gap-100">
            <div className="card display-flex dir-col gap-10">
              <img src={PersonIcon} alt="" className="icon" />
              <span className="fs-16 fw-300 txt-light-60 txt-left">
                Full Name
              </span>
              <p className="fs-18 fw-300 txt-light m-0 txt-left">
                Jhun Raymond C. Voloso
              </p>
            </div>
            <div className="card display-flex dir-col gap-10">
              <img src={Educ} alt="" className="icon" />
              <span className="fs-16 fw-300 txt-light-60 txt-left">
                Education
              </span>
              <p
                className="fs-18 fw-300 txt-light m-0 txt-left"
                style={{ lineHeight: 1.8 }}
              >
                Technological Institute of <br /> the Philippines - Manila
              </p>

              <span className="fs-14 fw-300 txt-light-60 txt-left">
                BSIT( 2010 - 2014 )
              </span>
            </div>
          </div>
          <div className="card display-flex dir-col gap-60">
            <div className="display-flex dir-col gap-10">
              <img src={Skill} alt="" className="icon" />
              <span className="fs-16 fw-300 txt-light-60 txt-left">Skills</span>
              <ul className="skill-list">
                <li className="fs-18 fw-300 txt-light txt-left mb-10">
                  UX / UI Development
                </li>
                <li className="fs-18 fw-300 txt-light txt-left mb-10">
                  Web Design
                </li>
                <li className="fs-18 fw-300 txt-light txt-left mb-10">
                  Web Development
                </li>
                <li className="fs-18 fw-300 txt-light txt-left mb-10">
                  Print Design
                </li>
                <li className="fs-18 fw-300 txt-light txt-left mb-10">
                  Branding
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
