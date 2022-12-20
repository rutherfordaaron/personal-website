import Main from "../components/main";
import Head from "next/head";
import Image from "next/image";
import ImgCard from "../components/image-card/image-card";
// Animation components
import { motion } from "framer-motion";
import motionProps from "../util/motion-props";
// Images sources
import lucySleeping from "../public/images/my-images/lucy sleeping.jpg";
import harmonyHeadshot from "../public/images/my-images/harmony headshot.jpg";
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
        <article className={styles.about}>
          <div clssName={styles.content1}>
            <motion.p {...motionProps}>Me and my wife, Harmony, live in the Roseway neighborhood of NE Portland, Oregon. We moved here from Utah in Novemeber of 2021 for a change of environment and a more vaired job market. My wife is an amazing baker and quite the bookworm. We have a small bookshelf in our apartemnt that is always completely filled with books from the library.</motion.p>

            <motion.p {...motionProps}>Our fluffball's name is Lucy, and she's very vocal in the mornings if you forget to give her some good play time. We found her in a nearby pet shop when we moved here to Portland and instantly fell in love with her. She loves to push boundaries and see what she can get away with, but she's also incredibly snuggly and loves watching movies with us.</motion.p>

            <motion.p {...motionProps}>My hobbies, beyond web development, include cooking, origami, writting, and games (board games, table top role play games, and video games). I make the best pancakes! Ask me to make them for you sometime. And if you ever want to get together to play board games or rpg games, I would love to.</motion.p>
          </div>

          <div className={styles.picGrid}>
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
                text="Our kitten Lucy, napping in her favorite place."
              >
                <Image
                  src={lucySleeping}
                  alt="lucy, my cat, sleeping"
                  height={644}
                  width={483}
                  className={styles.image}
                />
              </ImgCard>
            </div>
          </div>
        </article>
      </Main>
    </>
  )
}

export default About;