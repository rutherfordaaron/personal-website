import Image from "next/future/image";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./carousel.module.css";

import { useState, useEffect, useRef } from "react";

const Carrousel = ({ images }) => {
  const [carousel, setCarousel] = useState([]);
  const dataFetchedRef = useRef(false);

  const startCarousel = () => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    console.log("starting carousel");
    let index = 0;

    setInterval(() => {
      console.log("carousel element created")
      let arr = [...carousel];
      arr.push(images[index]);
      console.log(arr);
      setCarousel(arr);

      index >= images.length - 1 ? index = 0 : index++;
    }, 3000)
  }

  useEffect(() => startCarousel(), [])

  const getScreenWidth = () => {
    return window.screen.width;
  }

  const getAnimationDuration = () => {
    return window.screen.width / 600 * 5
  }

  return (
    <div className={styles.carrousel}>
      <AnimatePresence className={styles.test}>
        {carousel.map((el, i) => {
          const id = Math.random();
          return (
            <motion.div
              className={styles.imageWrapper}
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 0, x: 0 }}
              exit={{ opacity: [0, 1, 0], x: "clamp(110px, calc(100vw - 150px), 725px)" }}
              transition={{
                ease: "linear",
                duration: `${getScreenWidth() >= 800 ? getAnimationDuration() : 8}`
              }}
              key={`carouselImg${id}`}
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