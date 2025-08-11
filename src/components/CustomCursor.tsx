import { motion } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";
import { useMouseState } from "../hooks/useMouseState";
import { useCursorType } from "../hooks/useCursorType";
import { useTouchDevice } from "../hooks/useTouchDevice";
import { RedirectCursor } from "./cursor/RedirectCursor";
import { NormalCursor } from "./cursor/NormalCursor";
import { CURSOR_CONFIG } from "../config/cursorConfig";

const CustomCursor = () => {
  const mousePosition = useMousePosition();
  const { isMouseDown } = useMouseState();
  const { cursorType, inSection } = useCursorType();
  const isTouchDevice = useTouchDevice();

  const isRedirect = cursorType === "redirect";
  const isHovering = cursorType === "hover";

  const getScale = (): number => {
    if (isTouchDevice) {
      if (!inSection) return CURSOR_CONFIG.SCALE.MOBILE_DEFAULT;
      return isMouseDown
        ? CURSOR_CONFIG.SCALE.MOBILE_TOUCH
        : CURSOR_CONFIG.SCALE.MOBILE_IN_SECTION;
    }

    if (!inSection) return CURSOR_CONFIG.SCALE.DEFAULT;
    return isMouseDown
      ? CURSOR_CONFIG.SCALE.MOUSE_DOWN
      : CURSOR_CONFIG.SCALE.IN_SECTION;
  };

  const getOffset = () => {
    return isTouchDevice ? CURSOR_CONFIG.MOBILE_OFFSET : CURSOR_CONFIG.OFFSET;
  };

  const offset = getOffset();

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      animate={{
        x: mousePosition.x - offset.x,
        y: mousePosition.y - offset.y,
        scale: getScale(),
      }}
      transition={{
        type: "spring",
        ...CURSOR_CONFIG.ANIMATION.MAIN,
      }}
    >
      <RedirectCursor isVisible={isRedirect} />
      <NormalCursor isVisible={!isRedirect} isHovering={isHovering} />
    </motion.div>
  );
};

export default CustomCursor;
