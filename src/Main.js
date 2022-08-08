import { motion } from "framer-motion";

import "./css/Main.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

import headshot from "./images/empty-headshot.jpg";

const Main = () => {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

  return (
    <main>
      <div className="header flex">
        <div className="headerText">
          <motion.h1
            initial={{ opacity: 0, x: -500 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0, x: -500 }}
            transition={{ delay: 0.5, duration: 1.5, type: "spring", bounce: 0.35 }}
          >
            Hello, my name is Aaron Rutherford.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -500 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0, x: -500 }}
            transition={{ delay: 0.6, duration: 1.5, type: "spring", bounce: 0.35 }}
          >
            A self-taught frontend web developer.
          </motion.p>
        </div>
        <motion.img
          initial={{ opacity: 0, x: 500 }}
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