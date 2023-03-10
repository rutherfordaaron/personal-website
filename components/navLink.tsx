import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = (props: { href: string, text: string }) => {
  const linkVariants = {
    active: { opacity: 1, x: 0 },
    inactive: { opacity: 0, x: -15 },
    exit: { opacity: 0, x: -15 },
  }

  return (
    <motion.div
      variants={linkVariants}
      whileHover={{ scale: 1.1, originX: 0 }}
    >
      <Link legacyBehavior={false} href={props.href}>{props.text}</Link>
    </motion.div>
  )
}

export default NavLink;