import Main from "../components/main";
import Head from "next/head";
import Image from "next/image";
import ImgCard from "../components/image-card/image-card";
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
        <motion.p {...motionProps} className="codeDecor smallTxt"><em>(Tap an image)</em></motion.p>
        <div className={styles.imageGrid3}>
          <ImgCard
            className={`${styles.img2} ${styles.smallImg}`}
            text="My gorgeous wife, Harmony. She makes the best cookies and breads!"
          >
            <Image
              src={harmonyHeadshot}
              height={644}
              width={483}
              alt="Harmony"
              className={styles.image}
            />
          </ImgCard>
          <ImgCard
            className={styles.img1}
            text="Me and my wife on a rainy day at the Oregon Zoo."
          >
            <Image
              src={umbrellaShot}
              alt="me and my wife under an umbrella"
              height={644}
              width={483}
              className={styles.image}
            />
          </ImgCard>
          <ImgCard
            className={`${styles.img3} ${styles.smallImg}`}
            text="Our kitten Lucy, investigating the world from my shoulder."
          >
            <Image
              src={lucyOnShoulder}
              alt="Lucy on my shoulder"
              height={644}
              width={483}
              className={styles.image}
            />
          </ImgCard>
        </div>

        <motion.p {...motionProps}>My hobbies, beyond web development, include cooking, origami, writting, and games (board games, table top role play games, and video games). I make the best pancakes! Ask me to make them for you sometime.</motion.p>
      </Main>
    </>
  )
}

export default About;