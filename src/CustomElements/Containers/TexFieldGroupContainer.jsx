
const TextFieldGroupContainer = (props) => {
    return (
        <div
            style={{
                display: 'grid',
                gap: '1rem',
                gridTemplateColumns: props.cols,
                minWidth: '100%',
                maxWidth: '100%',
                ...props.sx
            }} >

            {props.children}
        </div>
    )
}

export { TextFieldGroupContainer };