import { motion } from "framer-motion";

import "./css/Main.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Menu from "./components/Menu";

import headshot from "./images/empty-headshot.jpg";

const Main = () => {
  return (
    <main>
      <Menu />
      <div className="header flex">
        <div className="headerText">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0, x: -500 }}
            transition={{ delay: 0.5, duration: 1.5, type: "spring", bounce: 0.35 }}
          >
            Hello, my name is Aaron Rutherford.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0, x: -500 }}
            transition={{ delay: 0.6, duration: 1.5, type: "spring", bounce: 0.35 }}
          >
            I'm a self-taught web developer.
          </motion.p>
        </div>
        <motion.img
          className="headshot"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 }}
          transition={{ delay: 0.5, duration: 1.5, type: "spring", bounce: 0.35 }}
          src={headshot}
          alt="headshot of me"
        />
      </div>
      <Projects />
      <About />
      <Contact />
    </main>
  )
}

export default Main;