import './Buttons.css'

const LoginButton = (props) => {

    return (<button
        type={props.type}
        onClick={props.onClick}
        className="login-btn"
        style={props.sx}
    >

        {props.children}
    </button>)
}


export { LoginButton }