// Components
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
// CSS Module
import styles from "./nav.module.css";


const Nav = () => {
  let [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    if (showMenu) {
      document.getElementById("navBtn").classList.remove("activeNavBtn");
    } else {
      document.getElementById("navBtn").classList.add("activeNavBtn");
    }
    setShowMenu(!showMenu)
  }

  const btnVariants = {
    active: { rotate: 90 },
    inactive: { rotate: 0 },
  }

  const menuVariants = {
    active: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.25,
        style: "linear",
        display: "block"
      }
    },
    inactive: {
      opacity: 0,
      y: -225,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        style: "linear",
        transitionEnd: {
          display: "none",
        }
      }
    },
    exit: {
      opacity: 0,
      y: -225,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        style: "linear",
        transitionEnd: {
          display: "none",
        }
      }
    },
  }

  const linkVariants = {
    active: { opacity: 1, y: 0, x: 0 },
    inactive: { opacity: 0, y: 100, x: 0 },
    exit: { opacity: 0, y: -100, x: 0 },
  }

  return (
    <>
      {/* Hamburger menu button */}
      <motion.button
        id="navBtn"
        type="button"
        className={styles.navBtn}
        onClick={toggleMenu}
        variants={btnVariants}
        initial="inactive"
        animate={showMenu ? "active" : "inactive"}
      >
        <FontAwesomeIcon icon={faBars} />
      </motion.button>
      {/* Navigation links */}
      <motion.nav
        className={styles.nav}
        variants={menuVariants}
        initial="inactive"
        animate={showMenu ? "active" : "exit"}
        whileHover="hover"
      >
        <Link href="/">
          <motion.a variants={linkVariants} className={styles.link} onClick={toggleMenu}>
            Home
          </motion.a>
        </Link>
        <Link href="/projects" >
          <motion.a variants={linkVariants} className={styles.link} onClick={toggleMenu}>
            Projects
          </motion.a>
        </Link>
        <Link href="/about" >
          <motion.a variants={linkVariants} className={styles.link} onClick={toggleMenu}>
            About Me
          </motion.a>
        </Link>
      </motion.nav>
    </>
  )
}

export default Nav;