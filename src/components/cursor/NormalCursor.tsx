import { motion } from "framer-motion";
import { CURSOR_CONFIG } from "../../config/cursorConfig";

interface NormalCursorProps {
  isVisible: boolean;
  isHovering: boolean;
}

export const NormalCursor = ({ isVisible, isHovering }: NormalCursorProps) => {
  return (
    <>
      {/* Main dot */}
      <motion.div
        initial={false}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          ...CURSOR_CONFIG.ANIMATION.NORMAL,
        }}
        className="w-4 h-4 bg-white rounded-full mix-blend-difference shadow-lg"
      />

      {/* Trailing ring */}
      <motion.div
        initial={false}
        animate={{
          opacity: isVisible ? (isHovering ? 0.7 : 0.4) : 0,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          ...CURSOR_CONFIG.ANIMATION.RING,
        }}
        className="absolute top-0 left-0 w-8 h-8 border-2 border-white rounded-full mix-blend-difference shadow-lg"
        style={{ x: -8, y: -8 }}
      />
    </>
  );
};
