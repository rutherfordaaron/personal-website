import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitterSquare, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import { motionProps } from "../../util/motion-props";

import styles from "./social-links.module.css";

const SocialLinks = () => {
  return (
    <div className={styles.socialGrid}>
      <motion.a {...motionProps} href="https://www.linkedin.com/in/aaron-rutherford-67aaa917a/">
        <FontAwesomeIcon icon={faLinkedin} />
      </motion.a>
      <motion.a {...motionProps} href="https://twitter.com/AaZRuth">
        <FontAwesomeIcon icon={faTwitterSquare} />
      </motion.a>
      <motion.a {...motionProps} href="https://github.com/hazipan/">
        <FontAwesomeIcon icon={faGithub} />
      </motion.a>
      <motion.a {...motionProps} href="mailto:rutherfordaaron1@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </motion.a>
    </div>
  )
}

export default SocialLinks;