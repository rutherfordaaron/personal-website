import Link from "next/link";

const LinkButton = (props: { href: string, text: string }) => {
  return (
    <Link legacyBehavior={false} scroll={false} href={props.href} className="block border-[2mm] border-slate-800 bg-violet-200 px-10 py-5 rounded-full text-dark text-2xl tracking-wider shadow-lg hover:bg-violet-100 hover:text-black md:text-3xl md:py-7 md:px-12 transition-all hover:scale-105">{props.text}</Link>
  )
}

export default LinkButton;