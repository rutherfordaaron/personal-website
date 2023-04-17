import CarouselItem from "./carouselItem";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export type CarouselArr = [string, string, string, string, string, string, string, ...string[]]
export type CarouselArrItem = { body: string }

const Carousel = () => {
  const fullArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  const getArr = (centerIndex: number) => {
    const lastIndex = fullArr.length - 1
    const start = centerIndex - 4;
    const end = centerIndex + 2;
    // If start and end index fit within the scope of fullArr, retrun a slice
    if (!(end > lastIndex) && start >= 0) {
      return fullArr.slice(start, end + 1);
    } else if (!(end > lastIndex) && start < 0) {
      // If end is withing scope, but start is not
      const secondPiece = fullArr.slice(0, end + 1);
      const firstPiece = fullArr.slice(fullArr.length - (start * -1), fullArr.length)
      return [...firstPiece, ...secondPiece];
    } else if (end > lastIndex && start >= 0) {
      // If start is within scope but end is not
      const firstPiece = fullArr.slice(start);
      const secondPiece = fullArr.slice(0, end - fullArr.length + 1);
      return [...firstPiece, ...secondPiece];
    }
    return ["That didn't work"];
  }

  const [carouselArr, setCarouselArr] = useState(getArr(0));

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      let nextIndex = currentIndex - 1;
      if (nextIndex < 0) nextIndex = fullArr.length - 1;
      currentIndex = nextIndex;
      let newArr = getArr(nextIndex);
      setCarouselArr(getArr(nextIndex));
    }, 4000);

    return () => clearInterval(interval);
  }, [])

  return (
    <div className="relative h-48 overflow-hidden max-w-[800px] mx-auto flex gap-10 items-center justify-center">
      <div className="z-50 absolute top-0 bottom-0 left-0 max-sm:w-12 w-32 bg-gradient-to-r from-white to-white/0" />
      <div className="flex justify-center items-center gap-10 relative right-[215px]">
        {carouselArr.map((el, i) => {
          return (
            <CarouselItem key={`carouselItem${el}`} body={el} index={i} />
          )
        })}
      </div>
      <div className="z-50 absolute top-0 bottom-0 right-0 max-sm:w-12 w-32 bg-gradient-to-l from-white to-white/0" />
    </div>
  )
}

export default Carousel;