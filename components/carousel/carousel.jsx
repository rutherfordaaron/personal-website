import Image from "next/future/image";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./carousel.module.css";

import { useState } from "react";

const Carrousel = ({ images }) => {
  const imageArr = [...images];

  const [srcArr, setSrcArr] = useState([...images]);
  const carrouselDuration = 5;

  const addComponent = () => {
    const tempArr = [...srcArr]
    tempArr.push(images[0])
    setSrcArr(tempArr);
  }

  const removeComponent = () => {
    const tempArr = srcArr.slice(1);
    setSrcArr(tempArr);
  }

  return (
    <div className={styles.carrousel}>
      <button onClick={addComponent}>Add Component</button>
      <button onClick={removeComponent}>Remove Component</button>
      <AnimatePresence>
        {srcArr.map((el, i) => {
          return (
            <motion.div
              className={styles.imageWrapper}
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: "calc(50vw - 65px)" }}
              exit={{ opacity: 0, x: "calc(100vw - 65px)" }}
              transition={{ ease: "linear" }}
              key={`carouselImg${i}`}
            >
              <Image src={el} alt="test image" width={75} height={75} />
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

export default Carrousel;