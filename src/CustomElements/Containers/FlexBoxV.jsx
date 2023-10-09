import { Box } from "@mui/material"


// Backgroudn Box
const FlexBoxV = (props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                ...props.sx,
            }} >

            {props.children}
        </Box>
    )
}

export { FlexBoxV };