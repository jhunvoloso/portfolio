import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import { NavLink } from "react-router-dom";

import fl from "../img/fl.png";
import mm from "../img/mm.png";
import pt from "../img/pt.png";
import ss from "../img/ss.png";
import ArrowRightUp from "../img/arrow-right-up.svg";
import ArrowRight from "../img/arrow-right.svg";
import ArrowLeft from "../img/arrow-left.svg";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function RecentProjects() {
  const rcnt_proj = useRef();
  const rcnt_proj_tl = useRef();

  const btn_next = useRef();
  const btn_prev = useRef();

  useGSAP(
    () => {
      rcnt_proj_tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#recent-proj-wrapper",
            start: "top center",
            end: "bottom center",
            scrub: false,
            markers: false,
          },
        })

        .from(["#title-1", "#my-buttons"], {
          opacity: 0,
          y: "-=30",
          duration: 1,
          stagger: 0.3,
        })

        .from(".slide-container", {
          opacity: 0,
          y: "+=30",
          duration: 0.5,
          // stagger: 0.3,
        });
    },
    { scope: rcnt_proj }
  );

  return (
    <div
      id="recentproject"
      className="container display-center"
      ref={rcnt_proj}
    >
      <div
        id="recent-proj-wrapper"
        className="display-flex dir-col gap-60 vw-100"
      >
        <div className="display-flex dir-col gap-20">
          <h2 id="title-1" className="title">
            Recent Projects
          </h2>

          <div
            id="my-buttons"
            className="display-flex display-flex-center dir-row gap-80"
          >
            <NavLink to="projects" className="btn-line">
              View All Projects <img src={ArrowRightUp} alt="" />
            </NavLink>
          </div>
        </div>

        {/* <div className="slide-container">
          <div className="slide-wrapper">
            <div className="slide-item">
              <img src={fl} alt="" />
            </div>
            <div className="slide-item ">
              <img src={fl} alt="" />
            </div>
            <div className="slide-item">
              <img src={fl} alt="" />
            </div>
            <div className="slide-item active">
              <img src={fl} alt="" />
            </div>
            <div className="slide-item">
              <img src={fl} alt="" />
            </div>
            <div className="slide-item">
              <img src={fl} alt="" />
            </div>
            <div className="slide-item">
              <img src={fl} alt="" />
            </div>
          </div>
        </div> */}
        <div className="slide-container">
          <Swiper
            slidesPerView={"auto"}
            initialSlide={1}
            centeredSlides={true}
            spaceBetween={300}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={{
              nextEl: btn_next.current,
              prevEl: btn_prev.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.nextEl = btn_next.current;
              swiper.params.navigation.prevEl = btn_prev.current;
            }}
            // navigation
            speed={1000}
            // loop={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={mm} alt="" className="slide-img" />
              <div
                id="my-buttons"
                className="display-flex display-flex-center dir-row gap-80"
              >
                <NavLink to="/projects/3" className="btn-line-link">
                  Miss Me <img src={ArrowRightUp} alt="" />
                </NavLink>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={fl} alt="" className="slide-img" />
              <div
                id="my-buttons"
                className="display-flex display-flex-center dir-row gap-80"
              >
                <NavLink to="/projects/1" className="btn-line-link">
                  Flan Labs <img src={ArrowRightUp} alt="" />
                </NavLink>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={ss} alt="" className="slide-img" />
              <div
                id="my-buttons"
                className="display-flex display-flex-center dir-row gap-80"
              >
                <NavLink to="/projects/2" className="btn-line-link">
                  Sisters & Seekers <img src={ArrowRightUp} alt="" />
                </NavLink>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={pt} alt="" className="slide-img" />
              <div
                id="my-buttons"
                className="display-flex display-flex-center dir-row gap-80"
              >
                <NavLink to="/projects/4" className="btn-line-link">
                  Peoples Taliba <img src={ArrowRightUp} alt="" />
                </NavLink>
              </div>
            </SwiperSlide>
            <div className="swiper-buttons">
              <button className="swiper-btn-prev">
                <img src={ArrowLeft} alt="" ref={btn_prev} />
              </button>
              <button className="swiper-btn-next">
                <img src={ArrowRight} alt="" ref={btn_next} />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default RecentProjects;
