import type { Config } from "tailwindcss";

const config: Config = {
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
        dark: {
          base: "#000000",
          lighter: "#120318",
          accent: {
            100: "#1A0524",
            200: "#2D0B3F",
            300: "#3F1158",
            400: "#4F1970",
            500: "#5F2288",
          },
          text: {
            primary: "#FFFFFF",
            secondary: "#94A3B8",
            accent: "#CBD5E1",
          },
          border: {
            DEFAULT: "#1E293B",
            accent: "#334155"
          }
        }
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
      },
      animationDelay: {
        '0': '0ms',
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
        '1500': '1500ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [],
};

export default config;
