import Link from "next/link";
import Image from "next/image";

const ProjectImage = (props: { src: string, alt: string, href: string }) => {
  return (
    <Link href={props.href} className="hover:pointer hover:grayscale-0 relative block min-w-[300px] h-[200px] lg:min-w-[450px] lg:h-[300px] overflow-hidden shadow-lg filter grayscale-[50%] bg-gray-200 max-md:bottom-4" legacyBehavior={false}>
      <Image src={props.src} alt={props.alt} layout="fill" className="hover:scale-110 transition-all" />
    </Link>
  )
}

export default ProjectImage;