/** @type {import('tailwindcss').Config} */
import tailwindcssanimate from "tailwindcss-animate";
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}"
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px"
    }
  },
  extend: {
    fontFamily: {
      IBM: ["IBM Plex Sans", "sans-serif"],
      CABIN: ["Cabin", "sans-serif"]
    },
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      acholor: {
        DEFAULT: "hsl(var(--anchor))",
        foreground: "hsl(var(--anchor))"
      },
      lgGray: {
        DEFAULT: "hsl(var(--lgGray))",
        foreground: "hsl(var(--lgGray))"
      },
      lgGrayBG: {
        DEFAULT: "hsl(var(--lgGrayBG))",
        foreground: "hsl(var(--lgGrayBG))"
      },
      secLight: {
        DEFAULT: "hsl(var(--secLight))",
        foreground: "hsl(var(--secLight))"
      },
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))"
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))"
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))"
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))"
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))"
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))"
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))"
      }
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)"
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" }
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" }
      },
      "move-left-right": {
        "0%, 100%": { transform: "translateX(0)" },
        "50%": { transform: "translateX(10px)" }
      },
      "move-right-left": {
        "0%, 100%": { transform: "translateX(0)" },
        "50%": { transform: "translateX(-10px)" }
      },
      "move-top-bottom": {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(10px)" }
      },
      "move-bottom-top": {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-10px)" }
      },
      "bounce-up": {
        "0%": { transform: "translateY(100%)", opacity: "0" },
        "50%": { transform: "translateY(-10%)", opacity: "1" },
        "100%": { transform: "translateY(0)", opacity: "1" }
      },
      "textIn": {
        "0%": { transform: "translateY(100%)", opacity: "0" },
        "50%": { transform: "translateY(-10%)", opacity: "1" },
        "100%": { transform: "translateY(0%)", opacity: "1" },
      },
      "textOut": {
        "0%": { transform: "translateY(0%)", opacity: "1" },
        "100%": { transform: "translateY(-100%)", opacity: "0" },
      },
    },
    animationDelay: {
      '100': '0.1s',
      '200': '0.2s',
      '300': '0.3s',
      '400': '0.4s',
      '500': '0.5s',
      '600': '0.6s',
      '700': '0.7s',
      '800': '0.8s',
      '900': '0.9s',
      '1000': '1s',
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      "move-left-right": "move-left-right 2s ease-in-out infinite",
      "move-right-left": "move-right-left 2s ease-in-out infinite",
      "move-top-bottom": "move-top-bottom 2s ease-in-out infinite",
      "move-bottom-top": "move-bottom-top 2s ease-in-out infinite",
      'bounce-up': 'bounce-up 0.8s ease-out forwards',
      "textIn": "textIn 0.5s ease both",
      "textOut": "textOut 0.5s ease both",
    }
  }
};
export const plugins = [
  tailwindcssanimate,
  function ({ addUtilities, theme }) {
    const animationDelay = theme('animationDelay');
    const utilities = Object.entries(animationDelay).map(([key, value]) => {
      return {
        [`.delay-${key}`]: { animationDelay: value },
      };
    });
    addUtilities(utilities);
  },
];
