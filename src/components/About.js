import "../css/About.css";
import { motion } from "framer-motion";

const About = () => {
  const fadeIn = {
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: .25,
        duration: .5,
        type: "spring",
        bounce: .3
      }
    },
    hide: { opacity: 0, y: -50, scale: 1.5 }
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
        I am a self-taught web designer, currently looking for a junior front-end position.
      </motion.p>
    </div>
  )
}

export default About;