import "../css/Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import resume from "../resume.pdf"


const Menu = () => {
  let [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const menuAnimation = {
    show: {
      opacity: 1,
      x: -200,
      transition: {
        type: "spring",
        bounce: .3,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    hide: { opacity: 0, x: 0 }
  }

  const menuItemsAnimation = {
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: .5,
        type: "spring",
        bounce: .3
      }
    },
    hide: { opacity: 0, x: 20 }
  }

  return (
    <div>
      <motion.button
        className="menuBtn"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        animate={showMenu ? { rotate: 90 } : { rotate: 0 }}
        exist={{ scale: 1 }}
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faBars} />
      </motion.button>
      <motion.nav
        className="menuContainer flex column"
        variants={menuAnimation}
        initial="hide"
        animate={showMenu ? "show" : "hide"}
        exit="hide"
      >
        <motion.a
          href="#projects"
          onClick={() => { setShowMenu(false) }}
          variants={menuItemsAnimation}
          whileHover={{ scale: 1.1 }}
        >
          My Projects
        </motion.a>

        <motion.a
          href="#about"
          onClick={() => { setShowMenu(false) }}
          variants={menuItemsAnimation}
          whileHover={{ scale: 1.1 }}
        >
          About Me
        </motion.a>

        <motion.a
          href="#contact"
          onClick={() => { setShowMenu(false) }}
          variants={menuItemsAnimation}
          whileHover={{ scale: 1.1 }}
        >
          Contact Me
        </motion.a>

        <motion.a
          href={resume}
          onClick={() => { setShowMenu(false) }}
          variants={menuItemsAnimation}
          whileHover={{ scale: 1.1 }}
        >
          My Resume
        </motion.a>

      </motion.nav>


      {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
            });
          });
        })
      }
    </div>
  )
}

export default Menu;