// Next.js and custom component imports
import Head from "next/head";
import Main from "../components/main";
import Carousel from "../components/carousel/carousel";

// Component styles import
import styles from "../public/styles/home.module.css";
// Animation components
import { motion } from "framer-motion"

const Home = () => {
  const imgSrcArr = [
    "/images/css logo.png",
    "/images/javascript logo.png",
    "/images/express logo.png",
    "/images/node logo.png",
    "/images/react logo.png"
  ]

  return (
    <>
      <Head>
        <title>Aaron Rutherford | Aspiring Web Developer</title>
      </Head>
      <Main>
        <h1 className={styles.h1}>Hello World,</h1>
        <p>My name is Aaron Rutherford, and I'm a web developer. I started my web development journey nearly one year ago, and I've come a long way. Take a look!</p>
        <Carousel images={imgSrcArr} />
      </Main>
    </>
  )
}

export default Home;