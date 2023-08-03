import React, { useState } from 'react';
import Display from './Display';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if( firstName.length,lastName.length,email.length,password.length > 0) {
            const newUser = {firstName,lastName,email,password};
        }else{
            alert("Invalid Form")
        }
    }

    return (
    <div>    
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                {
                    firstName.length < 2 ? <p style={{color:"red"}}>Name Must be atleast two characters</p>:<p></p>
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                {
                    lastName.length < 2 ? <p style={{color:"red"}}>Last Name Must be atleast two characters</p>:<p></p>
                }
            </div>
            <div>
                <div>
                    <label>email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {
                    email.length < 5 ? <p style={{color:"red"}}>Email Must be atleast two characters</p>:<p></p>
                }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {
                    firstName.length < 8 ? <p style={{color:"red"}}>Password must match and be at least 8 characters</p>:<p></p>
                }
                </div>
                <div>
                    <label>Cofmrim Password: </label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    
                </div>
            </div>
            <button type='submit'>Submit</button>
            
        </form>
    <Display firstName={firstName} lastName={lastName} email={email} password={password} confirmPassword={confirmPassword}></Display>
    </div>
        

    );
};

export default UserForm;
