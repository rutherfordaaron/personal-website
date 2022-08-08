import "../css/Projects.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill1Wave,
  faHandScissors,
  faGlobeAmericas,
  faDice,
  faClipboardList,
  faLocationDot,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  const projectAnimation = {
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

  const gridAnimation = {
    show: {
      opacity: 1,
      transition: {
        delay: .1,
        type: "spring",
        bounce: 1,
        staggerChildren: 0.2,
        delayChildren: 0.35
      }
    },
    hide: { opacity: 0 }
  }

  const linkAnimation = {
    on: { scale: 1.2, rotate: 15 },
    off: { scale: 1, rotate: 0 }
  }

  return (
    <div>
      <h2>My Projects</h2>
      <motion.div
        className="projectGrid"
        variants={gridAnimation}
        initial="hide"
        whileInView="show"
        exit="hide"
      >
        <motion.div
          className="project flex column"
          variants={projectAnimation}
        >
          <p className="projectTitle center">Tip Calculator</p>
          <motion.a
            variants={linkAnimation}
            initial="off"
            whileHover="on"
            exit="off"
            href="https://hazipan.github.io/tip-calc/"
            className="projectLink"
          >
            <FontAwesomeIcon className="icon" icon={faMoneyBill1Wave} />
          </motion.a>
          <motion.a
            variants={linkAnimation}
            initial="off"
            whileHover="on"
            exit="off"
            href="https://github.com/Hazipan/tip-calc/"
            className="githubLink"
          >
            <FontAwesomeIcon icon={faGithub} />
          </motion.a>
          <motion.button
            className="infoBtn"
            type="button"
            variants={linkAnimation}
            initial="off"
            whileHover="on"
            exit="off"
          >
            <FontAwesomeIcon className="info" icon={faInfoCircle} />
          </motion.button>
        </motion.div>

        <motion.div
          className="project flex column"
          variants={projectAnimation}
        >
          <p className="projectTitle center">Rock, Paper, Scissors</p>
          <motion.a
            variants={linkAnimation}
            initial="off"
            whileHover="on"
            exit="off"
            href="https://hazipan.github.io/rock-paper-scissors-lizard-spock/"
            className="projectLink"
          >
            <FontAwesomeIcon className="icon" icon={faHandScissors} />
          </motion.a>
          <motion.a
            variants={linkAnimation}
            initial="off"
            whileHover="on"
            exit="off"
            href="https://github.com/Hazipan/rock-paper-scissors-lizard-spock/"
            className="githubLink"
          >
            <FontAwesomeIcon icon={faGithub} />
          </motion.a>
          <motion.button
            className="infoBtn"
            type="button"
            variants={linkAnimation}
            initial="off"
            whileHover="on"
            exit="off"
          >
            <FontAwesomeIcon className="info" icon={faInfoCircle} />
          </motion.button>
        </motion.div>

        <motion.div
          className="project flex column"
          variants={projectAnimation}
        >
          <p className="projectTitle center">Countries API</p>
          <motion.a
            variants={linkAnimation}
            initial="off"
            whileHover="on"
            exit="off"
            href="https://hazipan.github.io/countries-project-using-api/"
            className="projectLink"
          >
            <FontAwesomeIcon className="icon" icon={faGlobeAmericas} />
          </motion.a>
          <motion.a
            variants={linkAnimation}
            initial="off"
            whileHover="on"
            exit="off"
            href="https://github.com/Hazipan/countries-project-using-api/"
            className="githubLink"
          >
            <FontAwesomeIcon icon={faGithub} />
          </motion.a>
          <motion.button
            className="infoBtn"
            type="button"
            variants={linkAnimation}
            initial="off"
            whileHover="on"
            exit="off"
          >
            <FontAwesomeIcon className="info" icon={faInfoCircle} />
          </motion.button>
        </motion.div>

        <motion.div
          className="project flex column"
          variants={projectAnimation}
        >
          <p className="projectTitle center">Character Web App</p>
          <motion.a
            variants={linkAnimation}
            initial="off"
            whileHover="on"
            exit="off"
            href="https://guildsmen-ttrpg.com/resources/characters.html"
            className="projectLink"
          >
            <FontAwesomeIcon className="icon" icon={faDice} />
          </motion.a>
          <motion.a
            variants={linkAnimation}
            initial="off"
            whileHover="on"
            exit="off"
            href="https://github.com/Hazipan/guildsmen-character-app/"
            className="githubLink"
          >
            <FontAwesomeIcon icon={faGithub} />
          </motion.a>
          <motion.button
            className="infoBtn"
            type="button"
            variants={linkAnimation}
            initial="off"
            whileHover="on"
            exit="off"
          >
            <FontAwesomeIcon className="info" icon={faInfoCircle} />
          </motion.button>
        </motion.div>

        <motion.div
          className="project flex column"
          variants={projectAnimation}
        >
          <p className="projectTitle center">Todo App</p>
          <motion.a
            variants={linkAnimation}
            initial="off"
            whileHover="on"
            exit="off"
            href="https://hazipan.github.io/todo-app/"
            className="projectLink"
          >
            <FontAwesomeIcon className="icon" icon={faClipboardList} />
          </motion.a>
          <motion.a
            variants={linkAnimation}
            initial="off"
            whileHover="on"
            exit="off"
            href="https://github.com/Hazipan/todo-app/"
            className="githubLink"
          >
            <FontAwesomeIcon icon={faGithub} />
          </motion.a>
          <motion.button
            className="infoBtn"
            type="button"
            variants={linkAnimation}
            initial="off"
            whileHover="on"
            exit="off"
          >
            <FontAwesomeIcon className="info" icon={faInfoCircle} />
          </motion.button>
        </motion.div>

        <motion.div
          className="project flex column"
          variants={projectAnimation}
        >
          <p className="projectTitle center">This Website</p>
          <motion.a
            variants={linkAnimation}
            initial="off"
            whileHover="on"
            exit="off"
            href="https://github.com/hazipan/personal-website"
            className="projectLink"
          >
            <FontAwesomeIcon className="icon" icon={faLocationDot} />
          </motion.a>
          <motion.a
            variants={linkAnimation}
            initial="off"
            whileHover="on"
            exit="off"
            href="https://github.com/Hazipan/personal-website/"
            className="githubLink"
          >
            <FontAwesomeIcon icon={faGithub} />
          </motion.a>
          <motion.button
            className="infoBtn"
            type="button"
            variants={linkAnimation}
            initial="off"
            whileHover="on"
            exit="off"
          >
            <FontAwesomeIcon className="info" icon={faInfoCircle} />
          </motion.button>
        </motion.div>
      </motion.div>
    </div >
  )
}

export default Projects;