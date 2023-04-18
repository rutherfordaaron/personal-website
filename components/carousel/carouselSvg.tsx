import Image from "next/image"

const CarouselSvg = (props: { src: string, alt: string }): JSX.Element => {
  return (
    <div className="relative w-[50px] h-[50px] drop-shadow-[0_1px_2px_rgb(255_255_255_/_0.5)] shadow-white">
      <Image src={props.src} alt={props.alt} layout="fill" />
    </div>
  )
}

export default CarouselSvg;