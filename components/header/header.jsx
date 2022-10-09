import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import styles from "./header.module.scss";
import { useEffect, useState } from 'react';

const Header = () => {


  useEffect(() => {
    /* If the theme isn't store in local storage yet, get the OS prefered theme, 
    set it to data-theme to affect app theme, and store it in local storage */
    if (!localStorage.getItem("theme")) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem("theme", "dark");
      } else {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem("theme", "light");
      }
      // If the theme is store in local storage, set it to data-theme to affect app theme
    } else if (localStorage.getItem("theme") === "dark") {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }, [])

  // Called on theme button press. Swaps the theme and stores it in local storage.
  const changeTheme = () => {
    if (localStorage.getItem("theme") === 'dark') {
      localStorage.setItem("theme", "light")
      document.body.setAttribute('data-theme', 'light');
    } else {
      localStorage.setItem("theme", "dark")
      document.body.setAttribute('data-theme', 'dark');
    }
  }

  return (
    <header>
      {/* Theme switch button */}
      <button className={styles.themeBtn} type="button" onClick={changeTheme}>
        <FontAwesomeIcon icon={faMoon} className={styles.moon} id="moonIcon" />
        <FontAwesomeIcon icon={faSun} className={styles.sun} id="sunIcon" />
      </button>
    </header>
  )
}

export default Header;