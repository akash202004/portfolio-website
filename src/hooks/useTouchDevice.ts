import { useState, useEffect } from "react";

export const useTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      const hasTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-expect-error - Legacy IE property
        navigator.msMaxTouchPoints > 0;

      const isMobileWidth = window.innerWidth < 768;

      setIsTouchDevice(hasTouch || isMobileWidth);
    };

    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);

    return () => window.removeEventListener("resize", checkTouchDevice);
  }, []);

  return isTouchDevice;
};
