import Header from "../components/header/header";
import Head from "next/head";
import Image from "next/image";
// Animation components
import Main from "../components/main";
// Custom components
import ProjectCard from "../components/project-card/project-card"
// Image sources
import tipCalc from "../public/images/screenshots/tip-calc.png";
// animation components
import { motion } from "framer-motion";
import motionProps from "../util/motion-props";
// css styles
import styles from "../public/styles/projects.module.css";


const Projects = () => {
  return (
    <>
      <Head>
        <title>Aaron Rutherford | Project</title>
      </Head>
      <Main>
        <h1>My Projects</h1>
        <motion.div
          {...motionProps}
          className={styles.projectGrid}
        >
          <ProjectCard
            caption="Tip Calculator"
            description="My first project using React, this app helps you calculate splitting the bill and tip with your group."
            src={tipCalc}
            link="https://hazipan.github.io/tip-calc/"
          />
        </motion.div>
      </Main>
    </>
  )
}

export default Projects;