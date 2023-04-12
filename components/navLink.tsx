import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const NavLink = (props: { href: string, text: string }) => {
  const router = useRouter();

  const linkVariants = {
    active: { opacity: 1, x: 0 },
    inactive: { opacity: 0, x: -15 },
    exit: { opacity: 0, x: -15 },
  }

  return (
    <motion.div variants={linkVariants}>
      <Link
        legacyBehavior={false}
        scroll={false}
        href={props.href}
        className={`${router.asPath == props.href ? "text-black" : "text-gray-500"} transition-all hover:text-slate-800`}
      >
        {props.text}
      </Link>
    </motion.div>
  )
}

export default NavLink;