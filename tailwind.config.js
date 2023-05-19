/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                custom: {
                    dark: "#171717",
                    gray: "#535353",
                    purple: "#9381ff",
                },
            },
        },
        fontFamily: {
            DMS: ["Urbanist", "sans-serif"],
        },
    },
    plugins: [],
};
