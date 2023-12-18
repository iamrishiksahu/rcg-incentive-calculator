import { createTheme } from "@mui/material";

export const LightThemeRed = createTheme({
    typography: {
        fontFamily: 'Inter, sans-serif',
        h4: {
            fontSize: '1.25rem'
        },
        h3: {
            fontSize: '2rem'
        },
        link1: {
            color: 'var(--link)',
            cursor: 'pointer'
        },
        link2: {
            color: 'var(--color-primary)',
            cursor: 'pointer'
        },
        mutedText1: {
            color: 'var(--color-text-1)'
        },
        mutedText2: {
            color: 'var(--color-text-2)'
        },
    },
    palette: {
        primary: {
            main: '#b50101',
            light: '#ff9999',
            dark: '##690101',
        },
        secondary: {
            main: '#e63fa7',
            light: '#ff36bb',
            dark: '#b20276',
        },
        rs: {
            test: '#000000'
        },
        link: {
            main: '#1a6efc'
        }
    },
})