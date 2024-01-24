/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js}",
        'node_modules/preline/dist/*.js',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: "10px",
                    sm: "40px",
                },
            },
            colors: {
                background: 'red',
                foreground: 'red',
                primary: 'red',
                "primary-foreground": 'red',
                card: 'red',
                "card-foreground": 'red',
                muted: 'red',
                input: 'red',
                border: 'red',
                link: 'red',
                danger: 'red',
            },
        },
    },
    plugins: [require("preline/plugin")],
};