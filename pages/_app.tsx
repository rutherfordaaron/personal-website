import "../styles/global.css";

const App = ({ Component, pageProps, router }) => {
  return (
    <>
      <Component {...pageProps} key={router.pathname} />
    </>
  )
}

export default App;