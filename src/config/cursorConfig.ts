export const CURSOR_CONFIG = {
  // Scale values
  SCALE: {
    DEFAULT: 1,
    IN_SECTION: 2,
    MOUSE_DOWN: 1.8,
    MOBILE_DEFAULT: 0.8, // Slightly smaller for mobile
    MOBILE_IN_SECTION: 1.5, // Smaller scaling for mobile
    MOBILE_TOUCH: 1.2,
  },

  // Animation settings
  ANIMATION: {
    MAIN: {
      stiffness: 500,
      damping: 30,
      mass: 0.5,
    },
    REDIRECT: {
      stiffness: 400,
      damping: 25,
    },
    NORMAL: {
      stiffness: 500,
      damping: 28,
    },
    RING: {
      stiffness: 150,
      damping: 15,
    },
  },

  // Positioning offset
  OFFSET: {
    x: 16,
    y: 16,
  },

  // Mobile positioning offset (slightly adjusted for touch)
  MOBILE_OFFSET: {
    x: 20,
    y: 20,
  },

  // Selectors
  SELECTORS: {
    REDIRECT: '[data-redirect="true"]',
    INTERACTIVE: 'a, button, [role="button"], .cursor-pointer',
  },
} as const;
