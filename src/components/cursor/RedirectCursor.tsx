import { motion } from "framer-motion";
import { TopRightArrowIcon } from "../icons/SocialIcons";
import { CURSOR_CONFIG } from "../../config/cursorConfig";

interface RedirectCursorProps {
  isVisible: boolean;
}

export const RedirectCursor = ({ isVisible }: RedirectCursorProps) => {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.5,
      }}
      transition={{
        type: "spring",
        ...CURSOR_CONFIG.ANIMATION.REDIRECT,
      }}
      className="absolute top-0 left-0 p-2 rounded-full border border-[#303030] bg-[#1c1c1d] shadow-lg"
    >
      <TopRightArrowIcon size={16} />
    </motion.div>
  );
};
