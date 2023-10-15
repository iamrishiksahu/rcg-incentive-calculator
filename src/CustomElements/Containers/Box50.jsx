import { Box } from "@mui/material"


// Backgroudn Container
const Box50 = (props) => {
    return (
        <Box
            sx={{
                width: '50%',
                // maxWidth: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...props.sx
            }} >

            {props.children}
        </Box>
    )
}

export { Box50 };