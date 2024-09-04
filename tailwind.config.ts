import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const svgToDataUri = require("mini-svg-data-uri");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'custom-gradient-dark': `
          radial-gradient(at 27% 37%, hsla(215, 80%, 30%, 1) 0px, transparent 0%),
          radial-gradient(at 97% 21%, hsla(125, 80%, 30%, 1) 0px, transparent 50%),
          radial-gradient(at 52% 99%, hsla(354, 80%, 40%, 1) 0px, transparent 50%),
          radial-gradient(at 10% 29%, hsla(256, 70%, 35%, 1) 0px, transparent 50%),
          radial-gradient(at 97% 96%, hsla(38, 70%, 40%, 1) 0px, transparent 50%),
          radial-gradient(at 33% 50%, hsla(222, 50%, 30%, 1) 0px, transparent 50%),
          radial-gradient(at 79% 53%, hsla(343, 55%, 45%, 1) 0px, transparent 50%)
        `,
        'custom-gradient-light': `
        radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 1) 0px, transparent 0%),
        radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%),
        radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 1) 0px, transparent 50%),
        radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 1) 0px, transparent 50%),
        radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%),
        radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
        radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%)
      `,
      'custom-radial-dark': 'radial-gradient(circle, rgba(0, 0, 0, 0) 0%, #1a1a1a 100%)',
      'custom-radial': 'radial-gradient(circle, rgba(2, 0, 36, 0) 0%, #fafafa 100%)',
      'grid-image': 'url("/assets/images/grid.svg")',
      'white-transparent-gradient': 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',

      },
      colors: {
        mainDarkBorder: "var(--mainDarkBorderColor)",
        mainWhiteBorder: "var(--mainWhiteBorderColor)",
        mainColor: "var(--mainColor)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        aurora: "aurora 60s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
