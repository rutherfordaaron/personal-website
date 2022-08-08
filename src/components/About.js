import "../css/About.css";
import { motion } from "framer-motion";

const About = () => {
  const fadeIn = {
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: .1,
        duration: .5,
        type: "spring",
        bounce: .3,
        staggerChildren: 1,
        delayChildren: 1
      }
    },
    hide: { opacity: 0, y: 20, scale: 1.05 }
  }

  const listItem = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .5,
        type: "spring",
        bounce: .3
      }
    },
    hide: { opacity: 0, y: 50 }
  }

  const listContainer = {
    show: {
      opacity: 1,
      transition: {
        delay: .1,
        type: "spring",
        bounce: 1,
        staggerChildren: 0.1,
        delayChildren: 0.35
      }
    },
    hide: { opacity: 0 }
  }

  return (
    <div className="about section flex column" id="about">
      <h2>About Me</h2>
      <motion.p
        variants={fadeIn}
        initial="hide"
        whileInView="show"
        exit="hide"
      >
        I'm a self-taught web designer located in Portland, Oregon, currently looking for a junior front-end position. I have a loving spouse, Harmony, and an adorable kitty, Lucy. I spend the majority of my time programming. The rest of my time, I spend playing games (ttrpg, board, and video), writing, and exploring the coast.
      </motion.p>

      <h3><em>My Journey</em></h3>
      <motion.p
        variants={fadeIn}
        initial="hide"
        whileInView="show"
        exit="hide"
      >
        I started programming a year ago while I was attending university. After a semester, I decided to focus on web development on my own. Since then, I have learned a wide variety of tools and laguages including:
      </motion.p>

      <motion.ul
        variants={listContainer}
        initial="hide"
        whileInView="show"
        exit="hide"
      >
        <motion.li variants={listItem}>HTML5</motion.li>
        <motion.li variants={listItem}>CSS</motion.li>
        <motion.li variants={listItem}>SASS</motion.li>
        <motion.li variants={listItem}>JavaScript</motion.li>
        <motion.li variants={listItem}>TypeScript</motion.li>
        <motion.li variants={listItem}>React</motion.li>
        <motion.li variants={listItem}>Framer Motion</motion.li>
        <motion.li variants={listItem}>API Calling</motion.li>
        <motion.li variants={listItem}>Beautiful React Drag and Drop</motion.li>
      </motion.ul>

      <h3><em>What I'm Learning</em></h3>
      <motion.p
        variants={fadeIn}
        initial="hide"
        whileInView="show"
        exit="hide"
      >
        My programming journey is just beginning and I know that there is so much more I have to learn, and that excites me to no end. I'm beginning to dip my feet into back-end programming. Learning exactly how the internet works is absolutely fascinating and I cannot wait to learn more! I am currently learning:
      </motion.p>

      <motion.ul
        variants={listContainer}
        initial="hide"
        whileInView="show"
        exit="hide"
      >
        <motion.li variants={listItem}>Redux</motion.li>
        <motion.li variants={listItem}>React Redux</motion.li>
        <motion.li variants={listItem}>Node.js</motion.li>
        <motion.li variants={listItem}>Express</motion.li>
        <motion.li variants={listItem}>MongoDB</motion.li>
        <motion.li variants={listItem}>Mongoose</motion.li>
      </motion.ul>
    </div>
  )
}

export default About;