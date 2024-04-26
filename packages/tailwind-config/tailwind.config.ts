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
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

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
      height: {
        app: "calc(100vh - 76px)",
      },
    },
    screens: screenSizes,
  },
  plugins: [capitalizeFirst, require("tailwindcss-dotted-background")],
};
export default config;
