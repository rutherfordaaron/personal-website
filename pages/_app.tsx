import Header from "../components/header";
import "../styles/global.css";

const App = ({ Component, pageProps, router }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} key={router.pathname} />
    </>
  )
}

export default App;