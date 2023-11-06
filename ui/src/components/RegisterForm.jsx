import React from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    
    return <div className="registerPage">
        <div className="registerWrapper">
            <h1>KAYIT OL</h1>

            <div className="registerPageInput">
                <h5>Email</h5>
                <input className="registerPageInputInput" type="email" placeholder="Email"></input>
            </div>

            <div className="registerPageInput">
                <h5>Şifre</h5>
                <input className="registerPageInputInput" type="password" placeholder="Create Password"></input>
            </div>

            <div className="registerPageInput">
                <h5>Şifre Tekrarı</h5>
                <input className="registerPageInputInput" type="password" placeholder="Confirm Password"></input>
            </div>

            <div className="registerPageRegisterButton">
                <button>Kayıt</button>
            </div>
            <div>
                <Link className="registerPageHaveAccount" to="/login">Zaten bir hesabın var mı ?</Link>
            </div>

        </div>
    </div>
}

export default RegisterForm; 