// Animation components
import { motion } from "framer-motion"

const Main = ({ children }) => {
  const mainVariants = {
    initial: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0, scrollY: window.scrollY },
  }

  return (
    <motion.main
      variants={mainVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear', duration: 0.5 }}
    >
      {children}
    </motion.main>
  )
}

export default Main;