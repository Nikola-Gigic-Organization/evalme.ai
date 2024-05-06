import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";

const capitalizeFirst = plugin(function ({ addUtilities }) {
  const newUtilities = {
    ".capitalize-first:first-letter": {
      textTransform: "uppercase",
    },
  };
  addUtilities(newUtilities);
});

const screenSizes = {
  root: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const heightWithoutHeader = "calc(100vh - 64px)";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
      spacing: screenSizes,
      maxWidth: screenSizes,
      minHeight: {
        app: heightWithoutHeader,
      },
      height: {
        app: heightWithoutHeader,
      },
      animation: {
        fade: "fade 3s infinite",
        "fade-delay": "fade 3s infinite 1500ms",
      },
    },
    screens: screenSizes,
  },
  plugins: [
    capitalizeFirst,
    require("tailwindcss-dotted-background"),
    plugin(({ addVariant, matchVariant, matchUtilities, theme }) => {
      addVariant("not-last", "&:not(:last-child)");
      addVariant("not-first", "&:not(:first-child)");
    }),
  ],
};
export default config;
