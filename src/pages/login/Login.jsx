import "./login.css"

export default function Login() {
    return (
       <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Sakthisocial</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on Sakthisocial.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Login In</button>
                    <span className="loginForget">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a New Account</button>
                </div>
            </div>
        </div>
           </div>
    )
    }