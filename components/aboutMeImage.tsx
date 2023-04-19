import Image from "next/image";

const AboutMeImage = (props: { src: string, alt: string }) => {
  return (
    <Image src={props.src} alt={props.alt} width={400} height={350} objectFit="cover" />
  )
}

export default AboutMeImage;