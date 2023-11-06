import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterOrLogin = () => {

    const[register,login] = useState("KAYIT");


function handleClick() {

    login("GİRİŞ")
    return;
}


    
    return <div className="registerPage">
        <div className="registerWrapper">
            <h1>{register}</h1>

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
                <button>{register}</button>
            </div>
            <div>
                <Link onClick={handleClick} className="registerPageHaveAccount">Zaten bir hesabın var mı ?</Link>
            </div>

        </div>
    </div>
}

export default RegisterOrLogin; 