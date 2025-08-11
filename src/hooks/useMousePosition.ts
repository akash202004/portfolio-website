import { useState, useEffect } from "react";

export interface MousePosition {
  x: number;
  y: number;
}

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateTouchPosition = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setMousePosition({ x: touch.clientX, y: touch.clientY });
      }
    };

    // Mouse events for desktop
    document.addEventListener("mousemove", updateMousePosition);

    // Touch events for mobile (with passive option for better performance)
    document.addEventListener("touchmove", updateTouchPosition, {
      passive: true,
    });
    document.addEventListener("touchstart", updateTouchPosition, {
      passive: true,
    });

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("touchmove", updateTouchPosition);
      document.removeEventListener("touchstart", updateTouchPosition);
    };
  }, []);

  return mousePosition;
};
