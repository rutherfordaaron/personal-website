// Animation components
import { motion } from "framer-motion";
import motionProps from "../../util/motion-props";

import styles from "./image-card.module.css";

const ImgCard = ({ children, text, className }) => {
  return (
    <motion.div
      {...motionProps}
      className={`${className || ""} ${styles.card}`}
      whileHover={{ rotateY: 180 }}
      transition={{ duration: 1 }}
    >
      {children}
      <div className={styles.divider} />
      <div className={styles.cardBack}>
        <p>{text}</p>
      </div>
    </motion.div>
  )
}

export default ImgCard;