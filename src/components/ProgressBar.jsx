"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.2,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[4px] z-50 origin-left
                 bg-gray-800 dark:bg-white transition-colors duration-300"
      style={{ scaleX: smoothProgress }}
    />
  );
};

export default ProgressBar;
