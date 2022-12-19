import Header from "../components/header/header";
import Head from "next/head";
import Image from "next/image";
// Animation components
import Main from "../components/main";
// Custom components
import ProjectCard from "../components/project-card/project-card"
// Image sources
import tipCalc from "../public/images/screenshots/tip-calc.png";
import rockPaperScissors from "../public/images/screenshots/rock-paper-scissors.png"
import countriesAPI from "../public/images/screenshots/countries-api.png";
import eCommerce from "../public/images/screenshots/e-commerce.png"
import todo from "../public/images/screenshots/todo.png";
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
            description="My first project using React. This app helps you calculate splitting the bill and tip with your group."
            src={tipCalc}
            alt="tip calculator project screenshot"
            link="https://hazipan.github.io/tip-calc/"
          />
          <ProjectCard
            caption="E-Commerce Site"
            description="This site shows off my ability to achieve pixel perfection from a given design. This is a mock site for an e-commerce site with a functional cart and image gallery."
            src={eCommerce}
            alt="static e-commerce project screenshot"
            link="https://hazipan.github.io/e-commerce-page/"
          />
          <ProjectCard
            caption="Rock, Paper, Scissors, Lizard, Spock"
            description="An expansion on the classic rock, paper, scissors game. This project really tested my CSS abilities. Your score is stored in your browser to save it between sessions."
            src={rockPaperScissors}
            alt="rock, paper, scissors, lizeard, spock project screenshot"
            link="https://hazipan.github.io/rock-paper-scissors-lizard-spock/"
          />
          <ProjectCard
            caption="Countries API"
            description="My first exposure to using APIs, this project is connecting to the countries API, allowing you to search and explore all the countries in the world and learn about them."
            src={countriesAPI}
            alt="countries API project screenshot"
            link="https://hazipan.github.io/countries-project-using-api/"
          />
          <ProjectCard
            caption="Todo App"
            description="A simple todo app with some sorting functionality. This project tested my ability to manipulate arrays and exposed me to creating drag and drop functionality."
            src={todo}
            alt="todo project screenshot"
            link="https://hazipan.github.io/todo-app/"
          />
        </motion.div>
      </Main>
    </>
  )
}

export default Projects;