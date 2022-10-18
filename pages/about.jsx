import Main from "../components/main";
import Head from "next/head";
import Image from "next/image";
// Animation components
import { motion } from "framer-motion";
import motionProps from "../util/motion-props";
// Images sources
import forestPark1 from "../public/images/my-images/forest park 1.jpg";
import forestPark2 from "../public/images/my-images/forest park 2.jpg";
import lucyCinnamonRoll from "../public/images/my-images/lucy cinnamon roll.jpg";
import lucySleeping from "../public/images/my-images/lucy sleeping.jpg";
import lucyOnShoulder from "../public/images/my-images/lucy on shoulder.jpg";
import harmonyHeadshot from "../public/images/my-images/harmony headshot.jpg";
import photoStrip from "../public/images/my-images/photo strip.jpg";
import umbrellaShot from "../public/images/my-images/us under umbrella.jpg";

import styles from "../public/styles/about.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>Aaron Rutherford | About Me</title>
      </Head>
      <Main>
        <motion.h1 {...motionProps}>About Me</motion.h1>
        <motion.p {...motionProps}>Me and my wife, Harmony, live in the Roseway neighborhood of NE Portland, Oregon. Our fluffball's name is Lucy, and she's very vocal in the mornings if you forget to give her some good play time.</motion.p>
        <div className={styles.imageGrid}>
          <motion.div {...motionProps} className={styles.img2}>
            <Image
              src={harmonyHeadshot}
              height={2576}
              width={1932}
              alt="Harmony"
              className={styles.image}
            />
          </motion.div>
          <motion.div {...motionProps} className={styles.img1}>
            <Image
              src={umbrellaShot}
              alt="us under an umbrella"
              height={2576}
              width={1932}
              className={styles.image}
            />
          </motion.div>
          <motion.div {...motionProps} className={styles.img3}>
            <Image
              src={lucyOnShoulder}
              alt="Lucy on my shoulder"
              height={2576}
              width={1932}
              className={styles.image}
            />
          </motion.div>
        </div>
      </Main>
    </>
  )
}

export default About;