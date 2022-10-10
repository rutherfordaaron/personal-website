// Font Awesome component and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun, faCloud, faBars } from '@fortawesome/free-solid-svg-icons';
// CSS Modules
import themeSwitchStyles from "./theme-switch.module.scss";


const ThemeSwitch = () => {
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
  )
}

export default ThemeSwitch;