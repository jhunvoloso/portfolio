import React from "react";
import Profile from "../img/profile-pic.png";
import { NavLink } from "react-router-dom";
import ArrowRightUp from "../img/arrow-right-up.svg";
import ArrowDown from "../img/arrow-down.svg";
import {useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Banner() {
  const comp = useRef();
  const tl = useRef();

  useGSAP(() => {
    tl.current = gsap
      .timeline()
      .from("#profile-img", {
        opacity: 0,
        y: "+=30",
        duration: 0.8,
        delay: 1,
      })

      .from(["#title-1", "#title-2", "#sub-title"], {
        opacity: 0,
        y: "+=30",
        duration: 1,
        stagger: 0.5,
      })

      .from("#my-buttons", {
        opacity: 0,
        duration: 0.8,
      })

  }, {scope: comp});

  return (
    <div id="banner" className="container" ref={comp}>
      <img id="profile-img" src={Profile} alt="" />
      <div>
        <h2 id="title-1" className="title">
          Hi!
        </h2>
        <h2 id="title-2" className="title">
          My name is Jhunry.
        </h2>
        <p
          id="sub-title"
          className="fs-16 fw-300 txt-light-60 txt-center"
          style={{ lineHeight: 1.8 }}
        >
          A passionate UX / UI Designer & Front-End Developer from the
          Philippines with 7+ years <br />
          experience in the Industry. Let's work together to reach your goals.
        </p>
      </div>
      <div id="my-buttons" className="display-flex dir-row gap-80">
        <NavLink to='hire' className="btn-line">Hire Me</NavLink>
        <NavLink to="projects" className="btn-line">
          Projects <img src={ArrowRightUp} alt="" />
        </NavLink>
      </div>

      
    </div>
  );
}

export default Banner;
