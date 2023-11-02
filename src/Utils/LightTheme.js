import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
    typography: {
        fontFamily: 'Inter, sans-serif',
    },
    palette: {
        primary: {
            main: '#b50101',
            light: '#564375',
            dark: '#8000ff',
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