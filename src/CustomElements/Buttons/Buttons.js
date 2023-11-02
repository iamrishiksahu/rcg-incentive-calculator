import './Buttons.css'

const LoginButton = (props) => {

    return (<button
        onClick={props.onClick}
        className="login-btn"
        style={props.sx}
    >

        {props.children}
    </button>)
}


export { LoginButton }