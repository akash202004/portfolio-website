import { useState, useEffect } from "react";

export const useMouseState = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 0) {
        // Left mouse button
        setIsMouseDown(true);
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (e.button === 0) {
        // Left mouse button
        setIsMouseDown(false);
      }
    };

    const handleTouchStart = () => {
      setIsMouseDown(true);
    };

    const handleTouchEnd = () => {
      setIsMouseDown(false);
    };

    // Mouse events for desktop
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Touch events for mobile
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return { isMouseDown };
};
