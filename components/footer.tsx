import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const footerLink = "text-accent-800 hover:text-accent-600 visited:text-accent-800";

const Footer = () => {
  return (
    <footer className="bg-accent-200 p-4">
      <div className="max-w-[1200px] mx-auto w-full md:flex items-center justify-between px-12">
        <div className="flex gap-6 text-lg max-md:my-8">
          <Link href="/" legacyBehavior={false} className={footerLink}>Home</Link>
          <Link href="/#portfolio" legacyBehavior={false} className={footerLink}>Portfolio</Link>
          <Link href="/about" legacyBehavior={false} className={footerLink}>About</Link>
          <Link href="/contact" legacyBehavior={false} className={footerLink}>Contact</Link>
        </div>
        <div className="flex gap-8 md:gap-10 justify-center md:justify-end">
          <Link href="https://www.linkedin.com/in/aaron-rutherford-67aaa917a/" legacyBehavior={false} className={`text-5xl ${footerLink}`} >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link href="https://github.com/rutherfordaaron" legacyBehavior={false} className={`text-5xl ${footerLink}`} >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;