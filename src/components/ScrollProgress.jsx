import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[110]"
    >
      <div
        className="h-full w-full"
        style={{ background: "linear-gradient(90deg, #38bdf8, #8b5cf6)" }}
      />
    </motion.div>
  );
}
