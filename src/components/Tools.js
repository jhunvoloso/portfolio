import React, { useEffect, useRef, useState } from "react";
import Sk from "../img/sketch.svg";
import Fg from "../img/figma.svg";
import Xd from "../img/xd.svg";
import Psd from "../img/psd.svg";
import Ai from "../img/ai.svg";
import Ind from "../img/ind.svg";
import Pr from "../img/pr.svg";
import Ae from "../img/ae.svg";
import html from "../img/html.svg";
import css from "../img/css.svg";
import scss from "../img/scss.svg";
import js from "../img/js.svg";
import jq from "../img/jq.svg";
import bootstrap from "../img/bootstrap.svg";
import wp from "../img/wp.svg";
import php from "../img/php.svg";
import rc from "../img/reactJs.svg";
import vc from "../img/vscode.svg";
import xmp from "../img/xmp.svg";
import git from "../img/git.svg";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Tools() {
  const [BTNactive, setBTNActive] = useState("1");
  const [anim_delay, setAnimDelay] = useState(2);
  const tools_s = useRef();
  const tools_tl = useRef();
  const dev_tools = useRef();
  const des_tools = useRef();

  const btn_dev = useRef();
  const btn_des = useRef();

  useGSAP(
    (context, contextSafe) => {
      tools_tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".tools-wrapper",
            start: "top center",
            end: "bottom center",
            scrub: false,
            markers: false,
          },
        })
        .from("#title-1", {
          y: "+=30",
          opacity: 0,
          duration: 1,
        })

        .from("#btn-tab-wrapper", {
          y: "+=30",
          opacity: 0,
          duration: 1,
        });
    },
    { scope: tools_s }
  );

  const btnActive = (event) => {
    setBTNActive(event.target.id);
    setAnimDelay(0);
  };

  let ctx_dev = gsap.context((context) => {
    context.add("dev_tools_anim", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".tools-wrapper",
            start: "top center",
            end: "bottom center",
            scrub: false,
            markers: false,
          },
        })
        .to(".dev-tools .tools-item", {
          opacity: 1,
          duration: 0.8,
          delay: 0.5,
          y: "-=30",
          stagger: 0.5,
        });
    });
  });

  let ctx_design = gsap.context((context) => {
    context.add("design_tools_anim", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".tools-wrapper",
            start: "top center",
            end: "bottom center",
            scrub: false,
            markers: false,
          },
        })
        .to(".design-tools .tools-item", {
          opacity: 1,
          duration: 0.8,
          y: "-=30",
          delay: anim_delay,
          stagger: 0.5,
        });
    });
  });

  const handleClickDev = () => {
    // console.log("dev");

    ctx_dev.dev_tools_anim();
  };

  const handleClickDes = () => {
    // console.log("des");

    ctx_design.design_tools_anim();
  };


  useEffect(() => {
    BTNactive === "1" ? handleClickDes() : handleClickDev();

    return () => {
      BTNactive === "1" ? ctx_design.revert() : ctx_dev.revert();
    };
  }, [BTNactive]);

  return (
    <div id="tools" className="container" ref={tools_s}>
      <div className="tools-wrapper gap-60 display-flex dir-col">
        <h2 id="title-1" className="title">
          Tools
        </h2>

        <div id="btn-tab-wrapper" className="display-flex display-flex-center">
          <div className="display-flex dir-row btn-tab-container">
            <button
              id={"1"}
              onClick={btnActive}
              ref={btn_des}
              className={`btn-tab ${BTNactive === "1" ? "active" : ""}`}
            >
              UX / UI Design
            </button>
            <button
              id={"2"}
              onClick={btnActive}
              ref={btn_dev}
              className={`btn-tab ${BTNactive === "2" ? "active" : ""}`}
            >
              Web Development
            </button>
          </div>
        </div>

        <div className="design-wrapper display-flex display-flex-center dir-row wrap">
          {/* Design Logos */}
          <div className="design-tools" ref={des_tools}>
            <div className="design tools-item display-flex display-flex-center display-flex-align-center dir-col gap-10">
              <img src={Sk} alt="" className="tools-logo" />
              <span className="fs-16 fw-300 txt-light">Sketch</span>
            </div>
            <div className="design tools-item  display-flex display-flex-center display-flex-align-center dir-col gap-10">
              <img src={Fg} alt="" className="tools-logo" />
              <span className="fs-16 fw-300 txt-light txt-center">Figma</span>
            </div>
            <div className="design tools-item  display-flex display-flex-center display-flex-align-center dir-col gap-10">
              <img src={Xd} alt="" className="tools-logo" />
              <span className="fs-16 fw-300 txt-light txt-center">Xd</span>
            </div>
            <div className="design tools-item  display-flex display-flex-center display-flex-align-center dir-col gap-10">
              <img src={Psd} alt="" className="tools-logo" />
              <span className="fs-16 fw-300 txt-light txt-center">PSD</span>
            </div>
            <div className="design tools-item  display-flex display-flex-center display-flex-align-center dir-col gap-10">
              <img src={Ai} alt="" className="tools-logo" />
              <span className="fs-16 fw-300 txt-light txt-center">
                Illustrator
              </span>
            </div>
            <div className="design tools-item  display-flex display-flex-center display-flex-align-center dir-col gap-10">
              <img src={Ind} alt="" className="tools-logo" />
              <span className="fs-16 fw-300 txt-light txt-center">
                InDesign
              </span>
            </div>
            <div className="design tools-item  display-flex display-flex-center display-flex-align-center dir-col gap-10">
              <img src={Pr} alt="" className="tools-logo" />
              <span className="fs-16 fw-300 txt-light txt-center">Premier</span>
            </div>
            <div className="design tools-item  display-flex display-flex-center display-flex-align-center dir-col gap-10">
              <img src={Ae} alt="" className="tools-logo" />
              <span className="fs-16 fw-300 txt-light txt-center">AE</span>
            </div>
          </div>
          {/* Design Logo End */}

          {/* Dev Logo */}
          <div className="dev-tools" ref={dev_tools}>
            <div className="dev tools-item display-flex display-flex-center display-flex-align-center dir-col gap-10">
              <img src={html} alt="" className="tools-logo" />
              <span className="fs-16 fw-300 txt-light">HTML</span>
            </div>
            <div className="dev tools-item display-flex display-flex-center display-flex-align-center dir-col gap-10">
              <img src={css} alt="" className="tools-logo" />
              <span className="fs-16 fw-300 txt-light">CSS</span>
            </div>
            <div className="dev tools-item display-flex display-flex-center display-flex-align-center dir-col gap-10">
              <img src={scss} alt="" className="tools-logo" />
              <span className="fs-16 fw-300 txt-light">SCSS</span>
            </div>
            <div className="dev tools-item display-flex display-flex-center display-flex-align-center dir-col gap-10">
              <img src={js} alt="" className="tools-logo" />
              <span className="fs-16 fw-300 txt-light">Javascript</span>
            </div>
            <div className="dev tools-item display-flex display-flex-center display-flex-align-center dir-col gap-10">
              <img src={jq} alt="" className="tools-logo" />
              <span className="fs-16 fw-300 txt-light">JQuery</span>
            </div>
            <div className="dev tools-item display-flex display-flex-center display-flex-align-center dir-col gap-10">
              <img src={bootstrap} alt="" className="tools-logo" />
              <span className="fs-16 fw-300 txt-light">Bootstrap</span>
            </div>
            <div className="dev tools-item display-flex display-flex-center display-flex-align-center dir-col gap-10">
              <img src={wp} alt="" className="tools-logo" />
              <span className="fs-16 fw-300 txt-light">Wordpress</span>
            </div>
            <div className="dev tools-item display-flex display-flex-center display-flex-align-center dir-col gap-10">
              <img src={php} alt="" className="tools-logo" />
              <span className="fs-16 fw-300 txt-light">PHP</span>
            </div>
            <div className="dev tools-item display-flex display-flex-center display-flex-align-center dir-col gap-10">
              <img src={rc} alt="" className="tools-logo" />
              <span className="fs-16 fw-300 txt-light">React JS</span>
            </div>
            <div className="dev tools-item display-flex display-flex-center display-flex-align-center dir-col gap-10">
              <img src={vc} alt="" className="tools-logo" />
              <span className="fs-16 fw-300 txt-light">VS Code</span>
            </div>
            <div className="dev tools-item display-flex display-flex-center display-flex-align-center dir-col gap-10">
              <img src={xmp} alt="" className="tools-logo" />
              <span className="fs-16 fw-300 txt-light">Xampp</span>
            </div>
            <div className="dev tools-item display-flex display-flex-center display-flex-align-center dir-col gap-10">
              <img src={git} alt="" className="tools-logo" />
              <span className="fs-16 fw-300 txt-light">Git</span>
            </div>
          </div>
          {/* Dev Logo End*/}
        </div>
      </div>
    </div>
  );
}

export default Tools;
