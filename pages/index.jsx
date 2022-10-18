// Next.js and custom components
import Head from "next/head";
import Image from "next/future/image";
import Main from "../components/main";
import Carousel from "../components/carousel/carousel";
import Timeline from "../components/timeline/timeline";

// Component styles
import styles from "../public/styles/home.module.css";
// Animation components
import { motion } from "framer-motion"
import motionProps from "../util/motion-props";

const Home = () => {
  const imgSrcArr = [
    "/images/logos/html logo.png",
    "/images/logos/css logo.png",
    "/images/logos/javascript logo.png",
    "/images/logos/react logo.png",
    "/images/logos/next logo.png",
    "/images/logos/express logo.png",
    "/images/logos/node logo.png",
    "/images/logos/mongodb logo.png",
    "/images/logos/mongoose logo.png",
  ]

  return (
    <>
      <Head>
        <title>Aaron Rutherford | Aspiring Web Developer</title>
      </Head>
      <Main>
        <article>
          <section>
            <motion.div {...motionProps}>
              <p className="codeDecor"><em>console.log("</em></p>
              <h1 className={styles.h1}>Hello World!</h1>
              <p className="codeDecor"><em>");</em></p>
            </motion.div>

            {/* Headshot image */}
            <motion.div className={styles.imageWrapper} {...motionProps}>
              <Image
                src="/images/my-images/square-headshot.jpg"
                width={250} height={250}
                className={styles.headshot}
                alt="Aaron Rutherford"
              />
            </motion.div>

            <motion.p {...motionProps}>My name is Aaron Rutherford, and I'm a web developer. I started my web development journey in February of 2022, and I've come a long way. Take a look!</motion.p>
          </section>

          <section>
            <motion.h2 {...motionProps}>My Journey</motion.h2>
            <motion.div {...motionProps}>
              <Timeline />
            </motion.div>
          </section>

          <section>
            <motion.h2 className={styles.h2} {...motionProps}>The Tools I Use</motion.h2>
            <motion.p {...motionProps}>I have an advanced knowledge of the foundations of the web: HTML, CSS, and JavaScript. I specialize in the MERN stack and prefer Next.js when building fullstack projects.</motion.p>

            {/* Animated Carousel */}
            <motion.div {...motionProps}>
              <p className="codeDecor"><em>&lt;Carousel images=&#123;imgSrcArr&#125;</em></p>
              <Carousel images={imgSrcArr} />
              <p className="codeDecor"><em>/&gt;</em></p>
            </motion.div>
          </section>
        </article>
      </Main>
    </>
  )
}

export default Home;