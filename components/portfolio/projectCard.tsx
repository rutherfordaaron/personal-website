import Link from "next/link";
import ProjectImage from "./projectImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = (props: { src: string, alt: string, href: string, githubHref: string, title: string, subtitle: string, body: JSX.Element, reverse?: boolean }) => {
  const { src, alt, href, githubHref, title, subtitle, body, reverse } = props;
  return (
    <div className={`my-8 flex gap-10 max-md:flex-col-reverse max-md:mb-20 items-center ${reverse ? "flex-row-reverse" : ""}`}>
      <ProjectImage src={src} alt={alt} href={href} />
      <div>
        <h3 className={reverse ? "md:text-right" : ""}><Link href={href}>{title}</Link></h3>
        <p className={`h3-sub ${reverse ? "md:text-right" : ""}`}>{subtitle}</p>
        {body}
        <Link href={githubHref} legacyBehavior={false}><p className={`indent-0 pt-2 ${reverse ? "text-right" : ""}`}>See it on GitHub. <FontAwesomeIcon className="opacity-75" icon={faExternalLink} /></p></Link>
      </div>
    </div>
  )
}

export default ProjectCard;