import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/global.css";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const App = ({ Component, pageProps, router }) => {
  const mainVariants = {
    initial: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  }
  return (
    <>
      <Header />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.main
          variants={mainVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={{ type: 'linear', duration: 0.5 }}
          className="max-w-[1200px] mx-auto p-4 pt-24 text-justify"
        >
          <Component {...pageProps} key={router.pathname} />

        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App;