// CSS Modules
import styles from "./header.module.scss";
// Components
import ThemeSwitch from "./theme-switch/theme-switch";
import Nav from "./nav/nav";
// React hooks
import { useEffect } from 'react';

import { motion } from 'framer-motion';


const Header = ({ active }) => {


  useEffect(() => {
    /* If the theme isn't stored in local storage yet, get the OS prefered theme, 
    set it to data-theme to affect the app theme, and store it in local storage */
    if (!localStorage.getItem("theme")) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem("theme", "dark");
      } else {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem("theme", "light");
      }
      // If the theme is stored in local storage, set it to data-theme to affect the app theme
    } else if (localStorage.getItem("theme") === "dark") {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }, [])

  // Framer-motion Variants
  const navVariants = {
    visible: { x: 0 },
    hidden: { x: 200 }
  }

  return (
    <header className={styles.header}>
      <Nav active={active} />
      <ThemeSwitch />
    </header>
  )
}

export default Header;