import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import MainLayout from "../layout/MainLayout";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, NavLink, useParams } from "react-router-dom";
import ArrowRightUp from "../img/arrow-right-up.svg";
import fl from "../img/fl.png";
import ss from "../img/ss.png";
import mm from "../img/mm.png";
import pt from "../img/pt.png";
import close from "../img/close.svg";

import {projectsList} from './data.js'

function ProjectList() {
  const projects = useRef();
  const projects_tl = useRef();
  const {id} = useParams();

  const [toggleProjectDetails, setToggleProjDetails] = useState(false);

  const [cardSate, setcardState] = useState(1);

  const [projTitle, setProjTitle] = useState("");
  const [projThumb, setProjThumb] = useState("");
  const [projDesc, setProjDesc] = useState("");
  const [projRole, setProjRole] = useState("");

  // Animation
  useGSAP(
    () => {
      projects_tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#projects-wrapper",
            start: "top center",
            end: "bottom center",
            scrub: false,
            markers: false,
          },
        })
        .from("#title-1", {
          opacity: 0,
          y: "-=30",
          duration: 1,
        })
        .from(".card-item", {
          opacity: 0,
          y: "-=30",
          duration: 1,
          stagger: 0.3,
        });
    },
    { scope: projects }
  );

  //ToggleMenu
  let win_height = window.innerHeight;
  let ctx_open_proj_dets = gsap.context((context) => {
    context.add("open_proj_dets", () => {
      gsap.timeline().to(".project-details", {
        duration: 1,
        height: win_height,
      });
    });
    context.add("close_proj_dets", () => {
      gsap.timeline().to(".project-details", {
        duration: 1,
        height: 0,
      });
    });
  });

  useEffect(() => {
    toggleProjectDetails === true
      ? ctx_open_proj_dets.open_proj_dets()
      : ctx_open_proj_dets.close_proj_dets();

    return () => {
      toggleProjectDetails ? console.log("true") : console.log("false");
    };
  }, [toggleProjectDetails]);

  let proj_list = projectsList.find((proj_list) => proj_list.id === parseInt(id));



  useEffect(()=>{
    console.log(id);

    if (proj_list !== undefined) {
      setcardState(proj_list.id);
      setProjTitle(proj_list.title);
      setProjThumb(proj_list.thumbnail);
      setProjDesc(proj_list.desc);
      setProjRole(proj_list.role);
      setToggleProjDetails(true);
    }

    console.log(proj_list);
  }, []);

  return (
    <MainLayout>
      <div
        className="container-default display-flex dir-col display-flex-center display-flex-align-center"
        ref={projects}
      >
        <div id="projects-wrapper" className="display-flex dir-col gap-100">
          <div>
            <h2 id="title-1" className="title">
              Projects
            </h2>
          </div>

          <div className="display-flex display-flex-center wrap dir-row gap-60 display-flex-align-center">

            {projectsList.map((projList) => {
                return (
                  <>
                    <div
                      key={projList.id}
                      className="card-item display-flex dir-col gap-30"
                    >
                      <img src={projList.thumbnail} alt="" />
                      <div
                        id="my-buttons"
                        className="display-flex display-flex-center dir-row gap-10"
                      >
                        <NavLink
                          className="btn-line-link"
                          key={projList.id}
                          id={projList.id}
                          //   onClick={() =>
                          //     handleCardClick(id, title, thumb, desc, role)
                          //   }
                          onClick={(e) => {
                            e.preventDefault();
                            setcardState(projList.id);
                            setProjTitle(projList.title);
                            setProjThumb(projList.thumbnail);
                            setProjDesc(projList.desc);
                            setProjRole(projList.role);
                            setToggleProjDetails(true);
                          }}
                        >
                          {projList.title}
                          <img src={ArrowRightUp} alt="" />
                        </NavLink>
                      </div>
                    </div>
                  </>
                );
            })}
          </div>
        </div>

        <div className="project-details">
          <div className="project-details-wrapper">
            <div className="project-details-close-btn">
              <img
                src={close}
                alt=""
                onClick={() => {
                  setToggleProjDetails(false);
                }}
              />
            </div>
            <div className="project-details-content">
              <div className="display-flex dir-row gap-100">
                <div>
                  <img src={projThumb} alt="" />
                </div>
                <div
                  className="display-flex dir-col gap-100"
                  style={{ width: "100%" }}
                >
                  <div
                    className="display-flex dir-row gap-100"
                    style={{ width: "100%" }}
                  >
                    <div
                      className="card display-flex dir-col gap-10"
                      style={{ width: "100%" }}
                    >
                      <span className="fs-16 fw-300 txt-light-60 txt-left">
                        Project
                      </span>
                      <p className="fs-18 fw-300 txt-light m-0 txt-left">
                        {projTitle}
                      </p>
                    </div>
                    <div
                      className="card display-flex dir-col gap-10"
                      style={{ width: "100%" }}
                    >
                      <span className="fs-16 fw-300 txt-light-60 txt-left">
                        Role
                      </span>
                      <p
                        className="fs-18 fw-300 txt-light m-0 txt-left"
                        style={{ lineHeight: 1.8 }}
                      >
                        {projRole}
                      </p>
                    </div>
                  </div>
                  <div
                    className="display-flex dir-row gap-100"
                    style={{ width: "100%" }}
                  >
                    <div
                      className="card display-flex dir-col gap-10"
                      style={{ width: "100%" }}
                    >
                      <span className="fs-16 fw-300 txt-light-60 txt-left">
                        Description
                      </span>
                      <p className="fs-18 fw-300 txt-light m-0 txt-left">
                        {projDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default memo(ProjectList);
