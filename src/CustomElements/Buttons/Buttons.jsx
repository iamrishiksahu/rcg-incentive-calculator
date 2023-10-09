
const LoginButton = (props) => {

    return (<button
        style={{
            backgroundColor: 'var(--color-primary)',
            border: 'none',
            outline: 'none',
            padding: '1rem 1rem',
            borderRadius: '2rem',
            color: 'var(--white)',
            boxShadow: 'var(--box-shadow)'
        }}
    >

        {props.children}
    </button>)
}


export { LoginButton }