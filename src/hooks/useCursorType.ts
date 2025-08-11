import { useState, useEffect } from "react";
import { useMousePosition } from "./useMousePosition";
import { CURSOR_CONFIG } from "../config/cursorConfig";

export type CursorType = "default" | "hover" | "redirect";

export interface CursorState {
  cursorType: CursorType;
  inSection: boolean;
}

export const useCursorType = (): CursorState => {
  const mousePosition = useMousePosition();
  const [cursorType, setCursorType] = useState<CursorType>("default");
  const [inSection, setInSection] = useState(false);

  useEffect(() => {
    const element = document.elementFromPoint(mousePosition.x, mousePosition.y);

    // Section detection - check for both redirect and scale attributes
    const hasRedirect = !!element?.closest(CURSOR_CONFIG.SELECTORS.REDIRECT);
    const hasScale = !!element?.closest('[data-cursor-scale="true"]');
    setInSection(hasRedirect && hasScale);

    if (element?.closest(CURSOR_CONFIG.SELECTORS.REDIRECT)) {
      setCursorType("redirect");
    } else if (
      element?.closest(CURSOR_CONFIG.SELECTORS.INTERACTIVE)
    ) {
      setCursorType("hover");
    } else {
      setCursorType("default");
    }
  }, [mousePosition.x, mousePosition.y]);

  return { cursorType, inSection };
};