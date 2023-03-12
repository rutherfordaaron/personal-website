import Header from "../components/header";
import "../styles/global.css";
import { AnimatePresence } from "framer-motion";

const App = ({ Component, pageProps, router }) => {
  return (
    <>
      <Header />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
    </>
  )
}

export default App;