// Next.js and custom component imports
import Head from "next/head";
import Image from "next/future/image";
import Main from "../components/main";
import Carousel from "../components/carousel/carousel";

// Component styles import
import styles from "../public/styles/home.module.css";
// Animation components
import { motion } from "framer-motion"

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
        <p className="codeDecor"><em>console.log("</em></p>
        <h1 className={styles.h1}>Hello World!</h1>
        <p className="codeDecor"><em>");</em></p>

        <div className={styles.imageWrapper}>
          <Image
            src="/images/my-images/square-headshot.jpg"
            width={250} height={250}
            className={styles.headshot}
            alt="Aaron Rutherford"
          />
        </div>

        <p>My name is Aaron Rutherford, and I'm a web developer. I started my web development journey nearly one year ago, and I've come a long way. Take a look!</p>

        <h2 className={styles.h2}>The tools I use:</h2>
        <p className="codeDecor"><em>&lt;Carousel images=&#123;imgSrcArr&#125;</em></p>
        <Carousel images={imgSrcArr} />
        <p className="codeDecor"><em>/&gt;</em></p>
      </Main>
    </>
  )
}

export default Home;