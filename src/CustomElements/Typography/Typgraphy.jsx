import { Typography } from "@mui/material"


// Custom Heading 1 [H1]
const H1 = (props) => {
    return (
        <Typography
            sx={{
                fontSize: '3rem',
                fontWeight: props.bold ? '600' : '400',
                ...props.sx,
            }} >

            {props.children}
        </Typography>
    )
}

// Custom Heading 2 [H2]
const H2 = (props) => {
    return (
        <Typography
            sx={{
                fontSize: '2rem',
                color: 'var(--color-dark)',
                fontWeight: props.bold ? '600' : '400',
                ...props.sx,

            }} >

            {props.children}
        </Typography>
    )
}
// Custom Heading 2 [H2]

const H3 = (props) => {
    return (
        <Typography
            sx={{
                fontSize: '1.5rem',
                color: 'var(--color-dark)',
                fontWeight: props.bold ? '600' : '400',
                ...props.sx,
            }} >

            {props.children}
        </Typography>
    )
}

// Custom Paragraph Test [PText1]
const PText = (props) => {
    return (
        <Typography
            variant='body'
            onClick={props.onClick}
            sx={{
                fontWeight: props.bold ? '600' : '400',
                ...props.sx,
            }} >

            {props.children}
        </Typography>
    )
}

// Custom Paragraph Test [Label]
const Label = (props) => {
    return (
        <Typography
            variant='body'
            sx={{
                ...props.sx,
            }} >

            {props.children}
        </Typography>
    )
}
// Custom Heading 2 [H2]
const Small = (props) => {
    return (
        <Typography
            variant='body'
            sx={{
                fontSize: '0.75rem',
                ...props.sx,

            }} >

            {props.children}
        </Typography>
    )
}

const TextLink = (props) => {
    return (
        <Typography
            variant={props.variant || 'body'}
            sx={{
                fontSize: '0.75rem',
                cursor: 'pointer',
                color: 'var(--link)',
                ...props.sx,

            }} >

            {props.children}
        </Typography >
    )
}

const TextTitle = (props) => {
    return (
        <Typography
            variant={props.variant || 'h6'}
            sx={{
                fontSize: '0.85rem',
                color: 'var(--color-text-3)',
                ...props.sx
            }}>
            {props.children}
        </Typography>
    )
}


export { H1, H2, H3, PText, Small, TextLink, TextTitle};