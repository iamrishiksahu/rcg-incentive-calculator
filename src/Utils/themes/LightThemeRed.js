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
        link: {
            color: 'var(--link)',
            cursor: 'pointer'
        }
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