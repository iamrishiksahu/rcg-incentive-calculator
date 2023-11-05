import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
    typography: {
        fontFamily: 'Inter, sans-serif',
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
        }
    },
})