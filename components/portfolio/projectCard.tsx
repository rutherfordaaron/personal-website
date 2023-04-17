import Image from "next/image";
import Link from "next/link";

const ProjectCard = (props: { src: string, alt: string, href: string }) => {
  return (
    <Link href={props.href} className="hover:pointer hover:grayscale-0 relative block min-w-[300px] h-[200px] lg:min-w-[450px] lg:h-[300px] overflow-hidden shadow-lg filter grayscale-[50%]" legacyBehavior={false}>
      <Image src={props.src} alt={props.alt} layout="fill" className="hover:scale-110 transition-all" />
    </Link>
  )
}

export default ProjectCard;