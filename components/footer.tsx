import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const footerLink = "";

const Footer = () => {
  return (
    <footer className="">
      <div className="">
        <Link href="/" legacyBehavior={false} scroll={false} className={footerLink}>Home</Link>
        <Link href="#portfolio" legacyBehavior={false} scroll={false} className={footerLink}>Portfolio</Link>
        <Link href="/about" legacyBehavior={false} scroll={false} className={footerLink}>About</Link>
        <Link href="/contact" legacyBehavior={false} scroll={false} className={footerLink}>Contact</Link>
      </div>
      <div className="flex gap-24 md:gap-7 justify-center md:justify-start">
        <Link href="https://www.linkedin.com/in/aaron-rutherford-67aaa917a/" legacyBehavior={false} className="text-5xl" >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link href="https://github.com/hazipan" legacyBehavior={false} className="text-5xl" >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </div>
    </footer>
  )
}

export default Footer;