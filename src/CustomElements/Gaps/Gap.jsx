const VGap = (props) => {

    return <div
        style={{
            marginTop: props.value || '2rem',
            ...props.style,
        }}
    >
        {props.children}

    </div>
}


const HGap = (props) => {

    return <div
        style={{
            minWidth: props.value || '1rem',
            ...props.style,

        }}
    >
        {props.children}

    </div>
}

export { VGap, HGap }