// Next.js and custom component imports
import Head from "next/head";
import Header from "../components/header/header";
import Main from "../components/main";

// Component styles import
import styles from "../styles/home.module.css";
// Animation components
import { motion } from "framer-motion"

const Home = () => {
  return (
    <>
      <Head>
        <title>Aaron Rutherford | Aspiring Web Developer</title>
      </Head>
      <Main>
        <h1 className={styles.h1}>Hello World,</h1>
        <p>My name is Aaron Rutherford, and I'm a web developer.</p>
      </Main>
    </>
  )
}

export default Home;