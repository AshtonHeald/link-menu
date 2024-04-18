import { TypeAnimation } from "react-type-animation";

const typewriter = () => {
  return (
    <TypeAnimation sequence={["Software Developer", 2500, "Writer", 3000, "Philosopher", 2500]} wrapper="span" cursor={true} repeat={Infinity} />
  )
}

export default typewriter
