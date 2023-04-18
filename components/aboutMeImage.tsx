import Image from "next/image";

const AboutMeImage = (props: { src: string, alt: string }) => {
  return (
    <Image src={props.src} alt={props.alt} width={300} height={200} layout="fill" objectFit="cover" />
  )
}

export default AboutMeImage;