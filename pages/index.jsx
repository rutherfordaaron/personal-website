// Next.js and custom components
import Head from "next/head";
import Image from "next/future/image";
import Main from "../components/main";
import Carousel from "../components/carousel/carousel";
import SocialLinks from "../components/social-links/social-links";
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

            <div className={styles.introGrid}>
              {/* Headshot image */}
              <div className={styles.wrapperBlock}>
                <motion.div className={styles.imageWrapper} {...motionProps}>
                  <Image
                    src="/images/my-images/square-headshot.jpg"
                    fill="true"
                    className={styles.headshot}
                    alt="Aaron Rutherford"
                  />
                </motion.div>
              </div>

              <div className={styles.intro}>
                <motion.p {...motionProps}>My name is Aaron Rutherford, and I'm a web developer and a coding instructor with <a href="https://www.codingwithkids.com/">Coding with Kids</a>. I'm completely self taught and have learned through a wide variety of resources: <a href="https://www.freecodecamp.org/">freeCodeCamp</a>, <a href="https://www.udemy.com/">Udemy</a>, YouTube, and a variety of forums. I started my web development journey in February of 2022, and I've come a long way. Take a look!</motion.p>
              </div>
            </div>
          </section>

          <section>
            <motion.h2 className={styles.h2} {...motionProps}>The Tools I Use</motion.h2>
            <motion.p {...motionProps}>I have an advanced knowledge of the foundations of the web: HTML, CSS, and JavaScript. I'm skilled in using React and packages that work with React such as <a href="https://www.framer.com/motion/">framer-motion</a>. I am capable of full stack development and prefer Next.js to build the front and the back in a seamless environment. MongoDB is my go to database service, but I'm just a novice with it so far. I'm actively working on a project that uses MongoDB to create users and store data.</motion.p>

            {/* Animated Carousel */}
            <motion.div {...motionProps}>
              <p className="codeDecor"><em>&lt;Carousel images=&#123;imgSrcArr&#125;</em></p>
              <Carousel images={imgSrcArr} />
              <p className="codeDecor"><em>/&gt;</em></p>
            </motion.div>
          </section>

          <section>
            <motion.h2 {...motionProps}>Let's Connect!</motion.h2>
            <motion.p {...motionProps}>You can find me on many platforms. Send me a request and lets chat!</motion.p>
            <SocialLinks />
          </section>
        </article>
      </Main>
    </>
  )
}

export default Home;