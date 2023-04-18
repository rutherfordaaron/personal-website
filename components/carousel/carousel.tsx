import CarouselItem from "./carouselItem";
import { useEffect, useState } from "react";

export type CarouselArr = [CarouselItem, CarouselItem, CarouselItem, CarouselItem, CarouselItem, CarouselItem, CarouselItem, ...CarouselItem[]]

export type CarouselItem = { element: JSX.Element, index: number }

const Carousel = (props: { items: CarouselArr }) => {
  const { items } = props;

  const getArr = (centerIndex: number) => {
    const lastIndex = items.length - 1
    const start = centerIndex - 4;
    const end = centerIndex + 2;
    // If start and end index fit within the scope of items, retrun a slice
    if (!(end > lastIndex) && start >= 0) {
      return items.slice(start, end + 1);
    } else if (!(end > lastIndex) && start < 0) {
      // If end is withing scope, but start is not
      const secondPiece = items.slice(0, end + 1);
      const firstPiece = items.slice(items.length - (start * -1), items.length)
      return [...firstPiece, ...secondPiece];
    } else if (end > lastIndex && start >= 0) {
      // If start is within scope but end is not
      const firstPiece = items.slice(start);
      const secondPiece = items.slice(0, end - items.length + 1);
      return [...firstPiece, ...secondPiece];
    }
    return [{ element: <p>Something went wrong</p>, index: 0 }];
  }

  const [carouselArr, setCarouselArr] = useState<CarouselItem[]>(getArr(0));

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      let nextIndex = currentIndex - 1;
      if (nextIndex < 0) nextIndex = items.length - 1;
      currentIndex = nextIndex;
      setCarouselArr(getArr(nextIndex));
    }, 4000);

    return () => clearInterval(interval);
  }, [])

  return (
    <div className="relative h-48 overflow-hidden max-w-[800px] mx-auto flex gap-10 items-center justify-center">
      <div className="z-50 absolute top-0 bottom-0 left-0 max-sm:w-12 w-32 bg-gradient-to-r from-white to-white/0" />
      <div className="flex justify-center items-center gap-10 relative right-[215px]">
        {carouselArr.map((el, i: number) => {
          return (
            <CarouselItem key={`item${el.index}`} body={el.element} index={i} />
          )
        })}
      </div>
      <div className="z-50 absolute top-0 bottom-0 right-0 max-sm:w-12 w-32 bg-gradient-to-l from-white to-white/0" />
    </div>
  )
}

export default Carousel;