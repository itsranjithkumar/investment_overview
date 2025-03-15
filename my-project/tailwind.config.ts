import type { Config } from "tailwindcss"

const config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                // Your color definitions
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            // Add this section to enable the 'after' variant
            variants: {
                extend: {
                    after: ['responsive', 'hover', 'focus'],
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config