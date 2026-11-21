import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F8FF",
        card: "#FFFFFF",
        primary: {
          DEFAULT: "#5B5BD6",
          hover: "#4D4DBF",
          light: "#EEF0FD",
        },
        teal: {
          DEFAULT: "#14B8A6",
          light: "#E6FAF7",
        },
        coral: {
          DEFAULT: "#FF7A59",
          light: "#FFF1EC",
        },
        sunny: {
          DEFAULT: "#FFC857",
          light: "#FFF9E6",
        },
        success: {
          DEFAULT: "#30A46C",
          light: "#EBF8F1",
        },
        severity: {
          critical: "#E5484D",
          criticalLight: "#FFEBEB",
          high: "#F76808",
          highLight: "#FFF0E6",
          medium: "#F5A524",
          mediumLight: "#FFF8EB",
          low: "#3E9BFF",
          lowLight: "#EDF5FF",
          info: "#8B93A7",
          infoLight: "#F1F3F7",
          clean: "#30A46C",
          cleanLight: "#EBF8F1",
        },
        border: "#E4E7EC",
      },
      fontFamily: {
        heading: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        xl: "16px",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(91, 91, 214, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
        card: "0 2px 12px rgba(16, 24, 40, 0.04)",
        lift: "0 10px 25px -5px rgba(91, 91, 214, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
