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
      let navToggle = document.getElementById("header");
      // Show the headerif scrolling up or scroll position < 250px from top
      // Otherwise, hide the header
      if (prevScrollpos > currentScrollPos || window.scrollY < 250) {
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
    <header id="header">
      <motion.nav
        id="nav"
        variants={menuVariants}
        initial="inactive"
        animate={showMenu ? "active" : "exit"}
        onClick={toggleNav}
      >
        <div>
          <NavLink href="/" text="Home" />
          <NavLink href="#portfolio" text="Portfolio" />
          <NavLink href="/about" text="About" />
          <NavLink href="/contact" text="Contact" />
        </div>

        <button onClick={toggleNav}><FontAwesomeIcon icon={faX} /></button>
      </motion.nav>
    </header>
  )
}

export default Header;