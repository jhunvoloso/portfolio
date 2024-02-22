import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";

function Career() {

  const career = useRef();
  const career_tl = useRef();

  useGSAP(()=>{
    career_tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#career-wrapper",
          start: "top center",
          end: "bottom center",
          scrub: false,
          //markers: true,
        },
      })

      .from("#title-1", {
        opacity: 0,
        y: "-=30",
        duration: 1,
        stagger: 0.3,
      })
      .from(".card", {
        opacity: 0,
        y: "+=30",
        duration: 1.5,
        stagger: 0.5,
      });
  }, {scope: career});

  return (
    <div id="career" className="container" ref={career}>
      <div id="career-wrapper" className="display-flex dir-col gap-100">
        <div className="display-flex dir-col ">
          <h2 id="title-1" className="title">
            Career Journey
          </h2>
        </div>
        <div className="display-flex dir-col gap-100 display-content-between">
          <div className="card display-flex dir-col gap-10">
            <span className="fs-16 fw-300 txt-light-60 txt-center">
              2022 - Present
            </span>
            <p
              className="fs-18 fw-300 txt-light m-0 txt-center"
              style={{ lineHeight: 1.8 }}
            >
              E-Horizon Phils. Inc.
            </p>

            <span className="fs-14 fw-300 txt-light-60 txt-center">
              UX / UI Developer
            </span>
          </div>
          <div className="card display-flex dir-col gap-10">
            <span className="fs-16 fw-300 txt-light-60 txt-center">
              2020 - 2022
            </span>
            <p
              className="fs-18 fw-300 txt-light m-0 txt-center"
              style={{ lineHeight: 1.8 }}
            >
              Think DWM Inc.,
            </p>

            <span className="fs-14 fw-300 txt-light-60 txt-center">
              UX / UI Designer
            </span>
          </div>

          <div className="card display-flex dir-col gap-10">
            <span className="fs-16 fw-300 txt-light-60 txt-center">
              2018 - 2020
            </span>
            <p
              className="fs-18 fw-300 txt-light m-0 txt-center"
              style={{ lineHeight: 1.8 }}
            >
              Xerosoft Inc.,
            </p>

            <span className="fs-14 fw-300 txt-light-60 txt-center">
              UX / UI Designer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
