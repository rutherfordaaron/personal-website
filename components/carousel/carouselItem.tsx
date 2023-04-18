import { Transition, motion, TargetAndTransition } from "framer-motion";

const CarouselItem = (props: { body: JSX.Element, index: number }) => {
  const { body, index } = props;

  const getStyle = () => {
    switch (index) {
      case (1): return "left-24";
      case (2): return "left-12 z-30";
      case (6): return "right-12 z-30";
      default: return "z-40"
    }
  }

  const animationDuration = 3;
  const defaultTransitionProps = { ease: "easeInOut", bounce: 0, duration: animationDuration }

  const getAnimate = (): TargetAndTransition => {
    switch (index) {
      case 0: return { scale: .5, x: 168.01, backgroundColor: "var(--third)" }
      case 1: return { scale: .75, x: 168.01, backgroundColor: "var(--third)" }
      case 2: return { scale: 1, x: 168, backgroundColor: "var(--secondary)" }
      case 3: return { scale: 1.25, x: 216, backgroundColor: "var(--primary)" }
      case 4: return { scale: 1, x: 216.01, backgroundColor: "var(--secondary)" }
      case 5: return { scale: .75, x: 168, backgroundColor: "var(--third)" }
      case 6: return { scale: .5, x: 118., backgroundColor: "var(--fourth)" }
    }
  }

  const getInitial = () => {
    switch (index) {
      case 0: return { scale: .25, x: 0, backgroundColor: "var(--fourth)" }
      case 1: return { scale: .5, x: 50, backgroundColor: "var(--fourth)" }
      case 2: return { scale: .75, x: 0, backgroundColor: "var(--third)" }
      case 3: return { scale: 1, x: 0, backgroundColor: "var(--secondary)" }
      case 4: return { scale: 1.25, x: 0, backgroundColor: "var(--primary)" }
      case 5: return { scale: 1, x: 0, backgroundColor: "var(--secondary)" }
      case 6: return { scale: .75, x: 0, backgroundColor: "var(--third)" }
    }
  }

  const getTransition = (): Transition => {
    switch (index) {
      case 0: return {
        ...defaultTransitionProps,
        scale: { from: .25, ...defaultTransitionProps },
        x: { from: 0, ...defaultTransitionProps },
      }
      case 1: return {
        ...defaultTransitionProps,
        scale: { from: .5, ...defaultTransitionProps },
        x: { from: 50, ...defaultTransitionProps },
      }
      case 2: return {
        ...defaultTransitionProps,
        scale: { from: .75, ...defaultTransitionProps },
        x: { from: 0, ...defaultTransitionProps },
      }
      case 3: return {
        ...defaultTransitionProps,
        scale: { from: 1, ...defaultTransitionProps },
        x: { from: 0, ...defaultTransitionProps },
      }
      case 4: return {
        ...defaultTransitionProps,
        scale: { from: 1.25, ...defaultTransitionProps },
        x: { from: 0, ...defaultTransitionProps },
      }
      case 5: return {
        ...defaultTransitionProps,
        scale: { from: 1, ...defaultTransitionProps },
        x: { from: 0, ...defaultTransitionProps },
      }
      case 6: return {
        ...defaultTransitionProps,
        scale: { from: .75, ...defaultTransitionProps },
        x: { from: 0, ...defaultTransitionProps },
      }
    }
  }

  return (
    <motion.div
      className={`w-44 h-24 flex justify-center items-center shadow-md shrink-0 relative ${getStyle()}`}
      animate={getAnimate()}
      transition={getTransition()}
      initial={getInitial()}
    >
      {body}
    </motion.div>
  )
}

export default CarouselItem;