import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollToPlugin);

function ScrollBullets() {
  const [active, setIsActive] = useState("1");
  const scroll_bullet = useRef();
  const bullet_tl = useRef();

  const bannerSection = (event) => {
    setIsActive(event.target.id);
    gsap.to(window, { duration: 2, scrollTo: "#banner" });
  };

  const aboutSection = (event) => {
    setIsActive(event.target.id);
    gsap.to(window, { duration: 2, scrollTo: "#about-me" });
  };

  const toolsSection = (event) => {
    setIsActive(event.target.id);
    gsap.to(window, { duration: 2, scrollTo: "#tools" });
  };

  const careerSection = (event) => {
    setIsActive(event.target.id);
    gsap.to(window, { duration: 2, scrollTo: "#career" });
  };
  
  const recentProjectSection = (event) => {
    setIsActive(event.target.id);
    gsap.to(window, { duration: 2, scrollTo: "#recentproject" });
  };

  useEffect(()=> {
    gsap.from("#about-me", {
      scrollTrigger: {
        trigger: "#about-me",
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setIsActive('2'),
        onLeaveBack: () => setIsActive('1')
      },
    });
    gsap.from("#tools", {
      scrollTrigger: {
        trigger: "#tools",
        start: "top center",
        end: "bottom center",
        onEnter: () => setIsActive("3"),
        onLeaveBack: () => setIsActive("2"),
      },
    });
    gsap.from("#career", {
      scrollTrigger: {
        trigger: "#career",
        start: "top center",
        end: "bottom center",
        onEnter: () => setIsActive("4"),
        onLeaveBack: () => setIsActive("3"),
      },
    });
    gsap.from("#recentproject", {
      scrollTrigger: {
        trigger: "#recentproject",
        start: "top center",
        end: "bottom center",
        onEnter: () => setIsActive("5"),
        onLeaveBack: () => setIsActive("4"),
      },
    });
  }, []);

  

  useGSAP(()=>{

    bullet_tl.current = gsap
      .timeline()

      .from(".scroll-container", {
        opacity:0,
        x: "+=30",
        duration: 1,
        delay: 4
      });

  },{scope: scroll_bullet});

  return (
    <div className="scroll-wrapper" ref={scroll_bullet}>
      <div className="scroll-container">
        <button
          key={1}
          id={"1"}
          onClick={bannerSection}
          className={active === "1" ? "scroll-bullet active" : "scroll-bullet"}
        ></button>

        <button
          key={2}
          id={"2"}
          onClick={aboutSection}
          className={active === "2" ? "scroll-bullet active" : "scroll-bullet"}
        ></button>

        <button
          key={3}
          id={"3"}
          onClick={toolsSection}
          className={active === "3" ? "scroll-bullet active" : "scroll-bullet"}
        ></button>

        <button
          key={4}
          id={"4"}
          onClick={careerSection}
          className={active === "4" ? "scroll-bullet active" : "scroll-bullet"}
        ></button>

        <button
          key={5}
          id={"5"}
          onClick={recentProjectSection}
          className={active === "5" ? "scroll-bullet active" : "scroll-bullet"}
        ></button>
      </div>
    </div>
  );
}

export default ScrollBullets;
