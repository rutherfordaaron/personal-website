import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 border-slate-800 border-t-[2mm] text-light p-7 flex gap-7 flex-col md:flex-row md:justify-between md:items-center">
      <div className=" gap-3 grid grid-cols-2 md:gap-7 md:flex md:flex-row">
        <Link href="/" legacyBehavior={false} scroll={false} className="underline text-center md:text-left">Home</Link>
        <Link href="/contact" legacyBehavior={false} scroll={false} className="underline text-center md:text-left">Contact</Link>
        <Link href="/services" legacyBehavior={false} scroll={false} className="underline text-center md:text-left">Services</Link>
        <Link href="/process" legacyBehavior={false} scroll={false} className="underline text-center md:text-left">Process</Link>
        <Link href="/work" legacyBehavior={false} scroll={false} className="underline text-center md:text-left">My Work</Link>
        <Link href="/about" legacyBehavior={false} scroll={false} className="underline text-center md:text-left">About</Link>
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