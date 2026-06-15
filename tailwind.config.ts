import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary:       "#0B1120",   // Bleu nuit profond
        "primary-800": "#111827",   // Surface cards
        "primary-700": "#1C2B3A",   // Hover states
        accent:        "#00D9A6",   // Vert émeraude (signature)
        "accent-hover":"#00B88A",
        gold:          "#F59E0B",   // Or africain (accent secondaire)
        "gold-muted":  "#78350F",
        light:         "#F8FAFC",
        dark:          "#1E293B",
        muted:         "#94A3B8",
        "muted-dark":  "#64748B",
      },
      fontFamily: {
        sans:    ["Inter", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(0,217,166,0.12) 0%, transparent 70%)",
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;