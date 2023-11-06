import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
    return <div className="loginPage">
        <div className="loginWrapper">

            <h1>Giriş Yap</h1>

            <div className="loginPageInput">
                <h5>Email</h5>
                <input className="loginPageInputInput" type="email" placeholder="Email" ></input>
            </div>

            <div className="loginPageInput">
                <h5>Şifre</h5>
                <input className="loginPageInputInput" type="password" placeholder="Password"></input>
            </div>

            <div className="loginPageLoginButton">
                <button>Giriş</button>
            </div>
            <div>
                <Link className="loginPageHaveAccount" to="/register">Bir Hesabın Yok Mu ?</Link>
            </div>

        </div>
    </div>
}

export default LoginForm; 