import { motion } from "framer-motion";

const CarouselItem = (props: { body: string, index: number, className?: string }) => {
  const { body, index, className } = props;

  const getStyle = () => {
    switch (index) {
      case (10):
        return `scale-75 rounded-xl shadow-sm bg-gray-500 absolute z-50 bg-red-500 -right-4 ${className}`;
      case (0):
        return "scale-75 shadow-sm bg-gray-500 relative left-12";
      case (1):
        return "scale-100 shadow-md bg-gray-400 relative left-0 right-0 z-40";
      case (2):
        return "scale-125 shadow-lg bg-gray-300 relative z-50 left-0 right-0";
      case (3):
        return "scale-100 shadow-md bg-gray-400 relative left-0 right-0 z-40"
      case (4):
        return "scale-75 shadow-sm bg-gray-500 relative right-12";
    }
  }

  return (
    <motion.div
      className={`transition-all w-44 h-24 flex justify-center items-center shrink-0 ${getStyle()}`}
    >
      <p className="drop-shadow-[0_1px_2px_rgb(255_255_255_/_0.5)] shadow-white">{body}</p>
    </motion.div>
  )
}

export default CarouselItem;