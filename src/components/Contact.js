import "../css/Contact.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const contactHover = {
    on: { scale: 1.1, rotate: 15 },
    off: { scale: 1, rotate: 0 }
  }
  return (
    <div class="section flex column">
      <h2>Get in Touch</h2>
      <div className="contactContainer flex">
        <motion.a
          href="mailto:rutherfordaaron1@gmail.com"
          variants={contactHover}
          initial="off"
          whileHover="on"
          exit="off"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </motion.a>
        <motion.a
          href="tel:+14352320944"
          variants={contactHover}
          initial="off"
          whileHover="on"
          exit="off"
        >
          <FontAwesomeIcon icon={faPhone} />
        </motion.a>
      </div>
      <p className="center">I can be reached best by email or text.</p>
    </div>
  )
}

export default Contact;