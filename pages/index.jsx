// Next.js and custom component imports
import Head from "next/head";
import Header from "../components/header/header";

// Component styles import
import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Aaron Rutherford | Aspiring Web Developer</title>
      </Head>
      <Header active="home" />
      <main className={styles.main}>
        <h1 className={styles.h1}><em>Hello World,</em></h1>
        <p>I'm Aaron Rutherford.</p>
      </main>
    </>
  )
}

export default Home;