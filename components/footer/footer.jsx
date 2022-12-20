import styles from "./footer.module.css";

import SocialLinks from "../social-links/social-links";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <SocialLinks />
        <a href="https://docs.google.com/document/d/1EjwxNwShlmVA9niiD9IeM-dCCh0zIQtJoCqNtejEUE8/edit?usp=share_link">Resume</a>
        <p className={styles.attribution}>Background image by <a href="https://www.freepik.com/free-vector/wave-textures-white-background-vector_3428189.htm#query=background%20pattern&position=0&from_view=keyword">rawpixel.com</a> on Freepik.</p>
      </div>
    </footer>
  )
}

export default Footer;