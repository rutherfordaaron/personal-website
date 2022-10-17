const motionVariants = {
  initial: { x: -20, opacity: 0 },
  whileInView: { x: 0, opacity: 1 }
}

const motionProps = {
  variants: motionVariants,
  initial: "initial",
  whileInView: "whileInView"
}

export default motionProps;