import React, { useState } from 'react';
import Reviews from './Reviews';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(false);
    const account = {
        username: "admin",
        password: "admin"
    }
    const handleUserNameChange = (event) => {
        setUsername(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const validateCreds = () => {
        if (username === account.username && password === account.password) {
            setStatus(true)
            document.getElementById("login").style.display = 'none'
        } else {
            alert("Invalid username/password")
        }
    }
    return(
        <>
        <div className="login" id='login'>
            <h1>Welcome to Maq's Reviews!</h1>
            <h4>Login to Continue:</h4>
            Username: 
            <input type="text" name="username" id="username" onChange={handleUserNameChange} />
            <br />
            <br />
            Password:
            <input type="password" name="password" id="password" onChange={handlePasswordChange}/>
            <br />
            <br />
            <center><button type="button" onClick={validateCreds}>Login</button></center>
        </div>
        {status ? (<Reviews />) : (<center><p>Login to see reviews</p></center>)}
        </>
    )
}