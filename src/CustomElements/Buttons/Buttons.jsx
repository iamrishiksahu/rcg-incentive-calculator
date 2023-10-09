import './Buttons.css'

const LoginButton = (props) => {

    return (<button
        className="login-btn"
    >

        {props.children}
    </button>)
}


export { LoginButton }