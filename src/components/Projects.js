import "../css/Projects.css";
import { motion } from "framer-motion";
import ProjectTile from "./ProjectTile";
import {
  faMoneyBill1Wave,
  faHandScissors,
  faGlobeAmericas,
  faDice,
  faClipboardList,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const gridAnimation = {
    show: {
      opacity: 1,
      transition: {
        delay: .1,
        type: "spring",
        bounce: 1,
        staggerChildren: 0.2,
        delayChildren: 0.35
      }
    },
    hide: { opacity: 0 }
  }

  return (
    <div className="section flex column projects" id="projects">
      <h2>My Projects</h2>
      <motion.div
        className="projectGrid"
        variants={gridAnimation}
        initial="hide"
        whileInView="show"
        exit="hide"
      >

        <ProjectTile
          title="Tip Calculator"
          icon={faMoneyBill1Wave}
          siteLink="https://hazipan.github.io/tip-calc/"
          repoLink="https://github.com/Hazipan/tip-calc/"
          info={
            <p className="infoText">A simple bill and tip splitting application. This was the first project that I implemented with React. Here, I learned all about class components, state, and component organization.</p>
          }
        />

        <ProjectTile
          title="Rock, Paper, Scissors"
          icon={faHandScissors}
          siteLink="https://hazipan.github.io/rock-paper-scissors-lizard-spock/"
          repoLink="https://github.com/Hazipan/rock-paper-scissors-lizard-spock/"
          info={
            <p className="infoText">A simple rock, paper, scissors, lizard, spock game. This project really tested my CSS abilities and taught me about local storage to store user variables for a better experience.</p>
          }
        />

        <ProjectTile
          title="Countries API"
          icon={faGlobeAmericas}
          siteLink="https://hazipan.github.io/countries-project-using-api/"
          repoLink="https://github.com/Hazipan/countries-project-using-api/"
          info={
            <p className="infoText">An API connected project that shows you all the countries of the world. This project taught me about JSON data, the react-router-dom package to create dynamic pages in React, and how to make calls to an API and extract information.</p>
          }
        />

        <ProjectTile
          title="Character Web App"
          icon={faDice}
          siteLink="https://guildsmen-ttrpg.com/resources/characters.html"
          repoLink="https://github.com/Hazipan/guildsmen-character-app/"
          info={
            <p className="infoText">A personal project for creating and using characters for a ttrpg game that me and my wife created. The entire Guildsmen website was coded by me. This project taught me how to better manage components and how to handle somwhat complex user interactions. This project is still under going some work.</p>
          }
        />

        <ProjectTile
          title="Todo App"
          icon={faClipboardList}
          siteLink="https://hazipan.github.io/todo-app/"
          repoLink="https://github.com/Hazipan/todo-app/"
          info={
            <p className="infoText">A simple todo application with drag and drop features. This project taught me a lot about array manipulation, color modes, and introduced me to react-beautiful-dnd (a drag and drop package for react).</p>
          }
        />

        <ProjectTile
          title="This Website"
          icon={faLocationDot}
          siteLink="#"
          repoLink="https://github.com/Hazipan/personal-website/"
          info={
            <p className="infoText">This website taught me how to create micro animations using framer-motion, as well as offer a way to showcase my work to potential employers like you!</p>
          }
        />
      </motion.div>
    </div >
  )
}

export default Projects;