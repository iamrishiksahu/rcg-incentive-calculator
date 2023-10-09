import { Container } from "@mui/material"


// Backgroudn Container
const BackgroundContainer = (props) => {
    return (
        <Container
            sx={{
                minHeight: '100vh',
                minWidth: '100vw',
                ...props.sx,
            }} >

            {props.children}
        </Container>
    )
}

export { BackgroundContainer };