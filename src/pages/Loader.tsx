import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const greetings = [
  "Hey",
  "नमस्ते",
  "¡Hola",
  "Bonjour",
  "নমস্কার",
  "Hallo",
  "こんにちは",
  "നമസ്കാരം",
  "ನಮಸ್ಕಾರ",
  "నమస్కారం",
  "வணக்கம்",
];

interface LoaderProps {
  onComplete: () => void;
}

function Loader({ onComplete }: LoaderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<"greetings" | "final" | "done">(
    "greetings"
  );

  // Safety net
  useEffect(() => {
    const safety = setTimeout(onComplete, 10000);
    return () => clearTimeout(safety);
  }, [onComplete]);

  // Greeting cycle
  useEffect(() => {
    if (phase === "greetings" && currentIndex < greetings.length) {
      const t = setTimeout(() => {
        setCurrentIndex((i) => i + 1);
      }, 200);
      return () => clearTimeout(t);
    }
    if (phase === "greetings" && currentIndex >= greetings.length) {
      // Delay mount of final text by one frame
      requestAnimationFrame(() => setPhase("final"));
    }
  }, [phase, currentIndex]);

  // Final text timer
  useEffect(() => {
    if (phase === "final") {
      const t = setTimeout(() => setPhase("done"), 800); // short display
      return () => clearTimeout(t);
    }
    if (phase === "done") {
      const t = setTimeout(onComplete, 300);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);

  const greetingVariants = {
    initial: { y: 50, opacity: 0, filter: "blur(5px)" },
    animate: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.15 },
    },
    exit: {
      y: -50,
      opacity: 0,
      filter: "blur(2px)",
      transition: { duration: 0 },
    },
  };

  const finalTextVariants = {
    initial: { y: 50, opacity: 0, filter: "blur(10px)" },
    animate: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.3 },
    },
    exit: {
      y: -50,
      opacity: 0,
      filter: "blur(10px)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="fixed inset-0 bg-[#171717] flex items-center justify-center z-50">
      <AnimatePresence mode="wait">
        {phase === "greetings" && currentIndex < greetings.length && (
          <motion.div
            key={`greet-${currentIndex}`}
            variants={greetingVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-6xl md:text-6xl font-sb text-white"
          >
            {greetings[currentIndex]}
          </motion.div>
        )}

        {phase === "final" && (
          <motion.div
            key="final-text"
            variants={finalTextVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-center"
          >
            <div className="text-2xl text-gray-400 mb-2 font-b text-left">
              I&apos;m
            </div>
            <div className="text-6xl md:text-8xl font-med text-white">
              Akash Laha
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Loader;
