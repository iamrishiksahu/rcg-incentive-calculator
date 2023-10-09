import { Box } from "@mui/material"


// Backgroudn Container
const FlexBoxH = (props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                ...props.sx,
            }} >

            {props.children}
        </Box>
    )
}

export { FlexBoxH };