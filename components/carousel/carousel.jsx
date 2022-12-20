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

    console.log("starting carousel...");
    let index = 0;

    setInterval(() => {
      let arr = [images[index]];
      setCarousel(arr);

      index >= images.length - 1 ? index = 0 : index++;
    }, 3000)
  }

  useEffect(() => startCarousel(), [])

  const getScreenWidth = () => {
    return window.screen.width;
  }

  const getAnimationDuration = () => {
    return getScreenWidth() / 600 * 4
  }

  const getImageSize = () => {
    return getScreenWidth() > 800 ? 75 : 50
  }

  return (
    <div className={styles.carrousel}>
      <AnimatePresence>
        {carousel.map((el, i) => {
          const id = Math.random();
          return (
            <motion.div
              className={styles.imageWrapper}
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 0, x: 0 }}
              exit={{ opacity: [0, 1, 0], x: "clamp(110px, calc(100vw - 120px), 725px)" }}
              transition={{
                ease: "linear",
                duration: `${getScreenWidth() >= 800 ? getAnimationDuration() : 8}`
              }}
              key={`carouselImg${id}`}
            >
              <Image src={el} alt="test image" width={getImageSize()} height={getImageSize()} />
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

export default Carrousel;