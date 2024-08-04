import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      mode: "jit", // Just-In-Time Compilation (optional but recommended)
      rtl: true, // Enable RTL support
      colors: {
        primary: "#0d6efd", // Replace with your desired primary color
      },
    },
  },
  plugins: [],
};
export default config;
