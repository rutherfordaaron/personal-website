// Animation components
import { motion } from "framer-motion";
import motionProps from "../../util/motion-props";
// Nextjs components
import Image from "next/image";
//fontawesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./project-card.module.css";

const ProjectCard = ({ caption, description, src, link, alt }) => {
  const contentId = `${caption}Content`;
  const caretId = `${caption}Caret`
  const toggleContent = (e) => {
    const content = document.getElementById(contentId);
    const caret = document.getElementById(caretId);
    content.classList.toggle(styles.showContent);
    caret.classList.toggle(styles.caretFlip);
  }

  return (
    <motion.div {...motionProps} className={styles.cardWrapper}>
      <div className={styles.card}>
        <motion.div className={styles.cardContent} id={contentId} onClick={toggleContent}>
          <div className={styles.captionWrapper}>
            <p>{caption}</p>
            <FontAwesomeIcon icon={faCaretDown} id={caretId} className={styles.caret} />
          </div>
          <p className={styles.description}>{description}</p>
          <a href={link} className={styles.descriptionLink}><em>{link}</em></a>
        </motion.div>
        <a href={link} className={styles.link}>
          <Image
            src={src}
            fill="true"
            alt={alt}
          />
        </a>
      </div>
    </motion.div>
  )
}

export default ProjectCard;