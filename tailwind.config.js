/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
        extend: {},
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "1.1rem",
                md: "1.5rem",
                lg: "2rem",
                xl: "2.2rem",
                "2xl": "2.5rem",
            },
        },
    },
    plugins: [],
};
