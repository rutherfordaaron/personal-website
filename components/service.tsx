import Image from "next/image";

const Service = (props: { src: string, text: string, className: string, alt: string }) => {
  return (
    <div className={`flex justify-center items-center gap-5 mb-16 px-3 ${props.className}`}>
      <img src={props.src} height={124} width={124} alt={props.alt} className="drop-shadow-xl" />
      <p className="w-1/2 text-center">{props.text}</p>
    </div>
  )
}

export default Service;