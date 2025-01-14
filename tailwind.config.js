const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: ["class", "class"],

    theme: {
        extend: {
            fontFamily: {
                vazirmatn: ["Vazirmatn", "serif"],
            },
            fontWeight: {
                200: "200",
                300: "300",
                400: "400",
                500: "500",
                600: "600",
                700: "700",
                900: "900",
            },
            colors: {
                primary: "#0d2b4c",
                secondary: "#fd2862",
                accent: "#28bea1",
                "color-1": "hsl(var(--color-1))",
                "color-2": "hsl(var(--color-2))",
                "color-3": "hsl(var(--color-3))",
                "color-4": "hsl(var(--color-4))",
                "color-5": "hsl(var(--color-5))",
            },
            animation: {
                rainbow: "rainbow var(--speed, 2s) infinite linear",
                "shimmer-slide": "shimmer-slide var(--speed) ease-in-out infinite alternate",
                "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
                "shiny-text": "shiny-text 8s infinite",
            },
            keyframes: {
                rainbow: {
                    "0%": {
                        "background-position": "0%",
                    },
                    "100%": {
                        "background-position": "200%",
                    },
                },
                "shimmer-slide": {
                    to: {
                        transform: "translate(calc(100cqw - 100%), 0)",
                    },
                },
                "spin-around": {
                    "0%": {
                        transform: "translateZ(0) rotate(0)",
                    },
                    "15%, 35%": {
                        transform: "translateZ(0) rotate(90deg)",
                    },
                    "65%, 85%": {
                        transform: "translateZ(0) rotate(270deg)",
                    },
                    "100%": {
                        transform: "translateZ(0) rotate(360deg)",
                    },
                },
                "shiny-text": {
                    "0%, 90%, 100%": {
                        "background-position": "calc(-100% - var(--shiny-width)) 0",
                    },
                    "30%, 60%": {
                        "background-position": "calc(100% + var(--shiny-width)) 0",
                    },
                },
            },
            animation: {
                pulse: "pulse var(--duration) ease-out infinite",
            },
            keyframes: {
                pulse: {
                    "0%, 100%": { boxShadow: "0 0 0 0 var(--pulse-color)" },
                    "50%": { boxShadow: "0 0 0 8px var(--pulse-color)" },
                },
            },
        },
    },
    plugins: [addVariablesForColors, require("tailwindcss-animate")],
};

function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));
    addBase({
        ":root": newVars,
    });
}
