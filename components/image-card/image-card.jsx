import { useState } from "react";
// Animation components
import { motion } from "framer-motion";
import motionProps from "../../util/motion-props";

import styles from "./image-card.module.css";

const ImgCard = ({ children, text, className }) => {
  let [tap, setTap] = useState(false);
  return (
    <motion.div
      {...motionProps}
      className={`${className || ""} ${styles.card}`}
      animate={tap ? { rotateY: 180 } : { rotateY: 0 }}
      onTap={() => { setTap(!tap) }}
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