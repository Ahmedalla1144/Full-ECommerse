import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navbar: "#D9D9D9",
        secondary: "#DB4444",
        thirdcolor : '#F9F9F9'
      },
      screens: {
        xs: '540px'
      },
    },
  },
  plugins: [],
} satisfies Config;
