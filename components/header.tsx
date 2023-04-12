import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import NavLink from "./navLink";
import Link from "next/link";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      // Show the header if scrolling up or scroll position < 250px from top
      // Otherwise, hide the header
      if (prevScrollpos > currentScrollPos || window.scrollY < 250) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      prevScrollpos = currentScrollPos;
    }

    if (window.screen.width > 767) setShowMenu(true)
  }, [])

  const menuVariants = {
    active: {
      opacity: 1,
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
      opacity: 0,
      x: 200,
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
      opacity: 0,
      x: 200,
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
    <header id="header" className={`bg-gray-200 shadow-lg fixed left-0 right-0 ${showHeader ? "top-0" : "-top-32"} transition-all duration-500 text-2xl px-4 py-3 flex justify-between items-center z-50`}>
      <Link href="/" className="italic hover:text-black text-gray-700" legacyBehavior={false}>aaronrutherford.dev</Link>
      <motion.nav
        id="nav"
        variants={menuVariants}
        initial="inactive"
        animate={showMenu ? "active" : "exit"}
        className="flex gap-4 justify-center max-sm:fixed right-1 top-1 max-sm:flex-col max-sm:bg-gray-300 max-sm:shadow-2xl max-sm:p-4 max-sm:pr-16"
        onClick={e => { if (window.screen.width <= 767) setShowMenu(!showMenu) }}
      >
        <NavLink href="/#portfolio" text="Portfolio" />
        <NavLink href="/about" text="About" />
        <NavLink href="/contact" text="Contact" />

        <button
          onClick={e => setShowMenu(false)}
          className="md:hidden absolute top-2 right-4 text-lg"
        >
          <FontAwesomeIcon icon={faX} />
        </button>
      </motion.nav>

      <button
        onClick={e => setShowMenu(!showMenu)}
        className="md:hidden"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  )
}

export default Header;