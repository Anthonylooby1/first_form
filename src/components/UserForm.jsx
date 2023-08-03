import React, { useState } from 'react';
import Display from './Display';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // const createUser = (e) => {
    //     // we must prevent the default refresh of the browser to keep our state from being reset
    //     e.preventDefault();

    //     // shorthand ES6 syntax for building an object - see notes above
    //     const newUser = { firstName, lastName, email, password, confirmPassword };
    //     console.log("Welcome", newUser);
    //     setFirstName("");
    //     setLastName("");
    //     setEmail("");
    //     setPassword("");
    //     setConfirmPassword("");
    // };

    return (
    <div>    
        <form>
            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <div>
                    <label>email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Cofmrim Password: </label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    
                </div>
            </div>
            
        </form>
    <Display firstName={firstName} lastName={lastName} email={email} password={password} confirmPassword={confirmPassword}></Display>
    </div>
        

    );
};

export default UserForm;
