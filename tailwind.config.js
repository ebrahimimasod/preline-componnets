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
                primary: {
                    DEFAULT: 'var(--blue)',
                    25: 'var(--blue-25)',
                    50: 'var(--blue-50)',
                    75: 'var(--blue-75)',
                    100: 'var(--blue-100)',
                    200: 'var(--blue-200)',
                    300: 'var(--blue-300)',
                    400: 'var(--blue-400)',
                    500: 'var(--blue-500)',
                    600: 'var(--blue-600)',
                    700: 'var(--blue-700)',
                    800: 'var(--blue-800)',
                    900: 'var(--blue-900)',
                },
                secondary: {
                    DEFAULT: 'var(--yellow)',
                    25: 'var(--yellow-25)',
                    50: 'var(--yellow-50)',
                    75: 'var(--yellow-75)',
                    100: 'var(--yellow-100)',
                    200: 'var(--yellow-200)',
                    300: 'var(--yellow-300)',
                    400: 'var(--yellow-400)',
                    500: 'var(--yellow-500)',
                    600: 'var(--yellow-600)',
                    700: 'var(--yellow-700)',
                    800: 'var(--yellow-800)',
                    900: 'var(--yellow-900)',
                },
                success: {
                    DEFAULT: 'var(--green)',
                    25: 'var(--green-25)',
                    50: 'var(--green-50)',
                    75: 'var(--green-75)',
                    100: 'var(--green-100)',
                    200: 'var(--green-200)',
                    300: 'var(--green-300)',
                    400: 'var(--green-400)',
                    500: 'var(--green-500)',
                    600: 'var(--green-600)',
                    700: 'var(--green-700)',
                    800: 'var(--green-800)',
                    900: 'var(--green-900)',
                },
                warning: {
                    DEFAULT: 'var(--orange)',
                    25: 'var(--orange-25)',
                    50: 'var(--orange-50)',
                    75: 'var(--orange-75)',
                    100: 'var(--orange-100)',
                    200: 'var(--orange-200)',
                    300: 'var(--orange-300)',
                    400: 'var(--orange-400)',
                    500: 'var(--orange-500)',
                    600: 'var(--orange-600)',
                    700: 'var(--orange-700)',
                    800: 'var(--orange-800)',
                    900: 'var(--orange-900)',
                },
                danger: {
                    DEFAULT: 'var(--red)',
                    25: 'var(--red-25)',
                    50: 'var(--red-50)',
                    75: 'var(--red-75)',
                    100: 'var(--red-100)',
                    200: 'var(--red-200)',
                    300: 'var(--red-300)',
                    400: 'var(--red-400)',
                    500: 'var(--red-500)',
                    600: 'var(--red-600)',
                    700: 'var(--red-700)',
                    800: 'var(--red-800)',
                    900: 'var(--red-900)',
                },
                gray: {
                    DEFAULT: 'var(--gray)',
                    25: 'var(--gray-25)',
                    50: 'var(--gray-50)',
                    75: 'var(--gray-75)',
                    100: 'var(--gray-100)',
                    200: 'var(--gray-200)',
                    300: 'var(--gray-300)',
                    400: 'var(--gray-400)',
                    500: 'var(--gray-500)',
                    600: 'var(--gray-600)',
                    700: 'var(--gray-700)',
                    800: 'var(--gray-800)',
                    900: 'var(--gray-900)',
                },
                background: 'red',
                foreground: 'red',
                "primary-foreground": 'red',
                card: 'red',
                "card-foreground": 'red',
                muted: 'red',
                input: 'red',
                border: 'red',
                link: 'red',
            },
        },
    },
    plugins: [require("preline/plugin")],
};