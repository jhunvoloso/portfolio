import React, { useEffect, useRef, useState } from "react";
import Logo from "../img/logo-light.svg";
import MenuBurger from "../img/menu-burder.svg";
import close from "../img/close.svg";
import { NavLink } from "react-router-dom";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";

function Header() {
  const head = useRef();
  const head_tl = useRef();
  const [toggleMenu, setToggleMenu] = useState(false);

  useGSAP(
    () => {
      head_tl.current = gsap
        .timeline()

        .from(".header-wrapper", {
          opacity: 0,
          y: "-=30",
          duration: 1,
          delay: 4,
        });
    },
    { scope: head }
  );

  let win_height = window.innerHeight;

  let ctx_openMenu = gsap.context((context) => {
    context.add("openMenu", () => {
      gsap.timeline().to(".toggle-menu", {
        duration: 1,
        height: win_height,
      });
    });
    context.add("closeMenu", () => {
      gsap.timeline().to(".toggle-menu", {
        duration: 1,
        height: 0,
      });
    });
  });

  useEffect(() => {
    toggleMenu === true ? ctx_openMenu.openMenu() : ctx_openMenu.closeMenu();

    return () => {
      toggleMenu ? console.log("false") : console.log("true");
    };
  }, [toggleMenu]);

  return (
    <div className="header" ref={head}>
      <div className="header-wrapper">
        <NavLink to='/'>
          <img src={Logo} alt="" />
        </NavLink>
        <button
          className="btn-open-menu"
          onClick={() => {
            setToggleMenu(true);
          }}
        >
          <img src={MenuBurger} alt="" />
        </button>
      </div>

      <div className="toggle-menu">
        <div className="toggle-close">
          <img
            src={close}
            alt=""
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        </div>
        <div className="toggle-link">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/hire">Hire Me</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
