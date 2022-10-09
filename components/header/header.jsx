import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun, faCloud } from '@fortawesome/free-solid-svg-icons';
import themeSwitchStyles from "./theme-switch.module.scss";
import { useEffect } from 'react';

const Header = () => {


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

  // Called when the theme button is pressed. It swaps the theme and stores it in local storage.
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
      <button className={themeSwitchStyles.themeBtn} type="button" onClick={changeTheme}>
        <FontAwesomeIcon icon={faMoon} className={themeSwitchStyles.moon} />
        <div className={themeSwitchStyles.stars}>
          <div className={themeSwitchStyles.star1} />
          <div className={themeSwitchStyles.star2} />
          <div className={themeSwitchStyles.star3} />
        </div>
        <FontAwesomeIcon icon={faSun} className={themeSwitchStyles.sun} />
        <div className={themeSwitchStyles.clouds}>
          <div className={themeSwitchStyles.cloud1Wrapper}>
            <FontAwesomeIcon icon={faCloud} className={themeSwitchStyles.cloud1Border} />
            <FontAwesomeIcon icon={faCloud} className={themeSwitchStyles.cloud1} />
          </div>
          <div className={themeSwitchStyles.cloud2Wrapper}>
            <FontAwesomeIcon icon={faCloud} className={themeSwitchStyles.cloud2Border} />
            <FontAwesomeIcon icon={faCloud} className={themeSwitchStyles.cloud2} />
          </div>
        </div>
        <div className={themeSwitchStyles.hill} />
      </button>
    </header>
  )
}

export default Header;