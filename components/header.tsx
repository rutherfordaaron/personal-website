import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import NavLink from "./navLink";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      let navToggle = document.getElementById("nav-toggle");
      if (prevScrollpos > currentScrollPos && navToggle) {
        navToggle.classList.add("nav-button-show");
        navToggle.classList.remove("nav-button-hidden");
      } else {
        navToggle.classList.remove("nav-button-show");
        navToggle.classList.add("nav-button-hidden");
      }
      prevScrollpos = currentScrollPos;
    }
  })

  const toggleNav = () => {
    setShowMenu(!showMenu);
  }

  const menuVariants = {
    active: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.25,
        bounce: 0,
        duration: .5,
        style: "spring",
        display: "block",
      }
    },
    inactive: {
      x: -360,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.25,
        style: "spring",
        bounce: 0,
        duration: .5,
        transitionEnd: {
          display: "none",
        }
      }
    },
    exit: {
      x: -360,
      transition: {
        style: "spring",
        bounce: 0,
        duration: .5,
        transitionEnd: {
          display: "none",
        }
      }
    },
  }

  return (
    <header>
      <button type="button" id="nav-toggle" className="fixed left-5 md:left-8 nav-button-show z-50 transition-all duration-300 text-dark text-2xl bg-slate-200 border-4 md:border-[6px] rounded-full w-14 h-14 border-slate-800 text-dark hover:scale-110 md:w-20 md:h-20 md:text-3xl" onClick={toggleNav}><FontAwesomeIcon icon={faBars} /></button>
      <motion.nav
        className="fixed top-0 h-screen w-auto flex flex-col justify-center items-start z-50 bg-violet-300 text-3xl px-16 gap-8 border-r-4 border-slate-800"
        id="nav"
        variants={menuVariants}
        initial="inactive"
        animate={showMenu ? "active" : "exit"}
        onClick={toggleNav}
      >
        <NavLink href="/" text="Home" />
        <NavLink href="/contact" text="Get a Website" />
        <NavLink href="/process" text="My Process" />
        <NavLink href="/work" text="My Work" />
        <NavLink href="/about" text="About Me" />

        <button className="absolute top-5 right-5 hover:scale-110 transition-all" onClick={toggleNav}><FontAwesomeIcon icon={faX} /></button>
      </motion.nav>
    </header>
  )
}

export default Header;