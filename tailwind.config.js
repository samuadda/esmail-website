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
    			vazirmatn: [
    				'Vazirmatn',
    				'serif'
    			]
    		},
    		fontWeight: {
    			'200': '200',
    			'300': '300',
    			'400': '400',
    			'500': '500',
    			'600': '600',
    			'700': '700',
    			'900': '900'
    		},
    		colors: {
    			primary: '#0d2b4c',
    			secondary: '#fd2862',
    			accent: '#28bea1',
    			'color-1': 'hsl(var(--color-1))',
    			'color-2': 'hsl(var(--color-2))',
    			'color-3': 'hsl(var(--color-3))',
    			'color-4': 'hsl(var(--color-4))',
    			'color-5': 'hsl(var(--color-5))'
    		},
    		animation: {
    			pulse: 'pulse var(--duration) ease-out infinite',
    			marquee: 'marquee var(--duration) infinite linear',
    			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
    		},
    		keyframes: {
    			pulse: {
    				'0%, 100%': {
    					boxShadow: '0 0 0 0 var(--pulse-color)'
    				},
    				'50%': {
    					boxShadow: '0 0 0 8px var(--pulse-color)'
    				}
    			},
    			marquee: {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(calc(-100% - var(--gap)))'
    				}
    			},
    			'marquee-vertical': {
    				from: {
    					transform: 'translateY(0)'
    				},
    				to: {
    					transform: 'translateY(calc(-100% - var(--gap)))'
    				}
    			}
    		}
    	}
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
