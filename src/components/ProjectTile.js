import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ProjectTile = (props) => {
  let [showInfo, setShowInfo] = useState(false);

  const linkAnimation = {
    on: { scale: 1.2, rotate: 15 },
    off: { scale: 1, rotate: 0 }
  }

  const xAnimation = {
    on: { scale: 1.2 },
    off: { scale: 1 }
  }

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

  return (
    <motion.div
      className="project flex column"
      variants={projectAnimation}
    >
      {!showInfo ?
        <div className="flex column">
          <p className="projectTitle center">{props.title}</p>
          <motion.a
            variants={linkAnimation}
            initial="off"
            whileHover="on"
            exit="off"
            href={props.siteLink}
            className="projectLink"
          >
            <FontAwesomeIcon className="icon" icon={props.icon} />
          </motion.a>
          <motion.a
            variants={linkAnimation}
            initial="off"
            whileHover="on"
            exit="off"
            href={props.repoLink}
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
            onClick={() => { setShowInfo(true) }}
          >
            <FontAwesomeIcon className="info" icon={faInfoCircle} />
          </motion.button>
        </div> :
        <div>
          <motion.button
            className="infoClose"
            type="button"
            variants={xAnimation}
            initial="off"
            whileHover="on"
            exit="off"
            onClick={() => { setShowInfo(false) }}
          >
            <FontAwesomeIcon className="info" icon={faXmark} />
          </motion.button>
          {props.info}
        </div>}
    </motion.div>
  )
}

export default ProjectTile;