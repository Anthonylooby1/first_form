import React, {useState} from "react";
import UserForm from "./UserForm";

const Display = (props) => {
    const {firstName, lastName, email, password, confirmPassword} = props
    return (
        <div>
            <div>
                <h1>First Name:{firstName}</h1>
            </div>
            <div>
                <h1>Last Name: {lastName}</h1>
            </div>
            <div>
                <h1>Email: {email}</h1>
            </div>
            <div>
                <h1 type="password">Password {password}</h1>
            </div>
            <div>
                <h1 type="password">Confirm Password: {confirmPassword}</h1>
            </div>
        </div>
    )
}
export default Display
