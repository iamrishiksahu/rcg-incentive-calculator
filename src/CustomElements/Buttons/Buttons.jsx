import './Buttons.css'

const LoginButton = (props) => {

    return (<button
        className="login-btn"
        style={props.sx}
    >

        {props.children}
    </button>)
}


export { LoginButton }