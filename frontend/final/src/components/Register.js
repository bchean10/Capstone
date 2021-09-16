import React, { useState } from 'react';
import {useHistory} from "react-router-dom";

function Register(){
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history=useHistory();

    async function register(){
        let item = {username, firstName, lastName, email, password}

        let result = await fetch ("http://localhost:5000/auth/register", {
            method: "POST",
            body: JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept": "application/json"
            }
        })
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        history.push('/login')
    }
    return(
        <div className="col-sm-6 offset-sm-3">
            <h1>Register</h1>
            <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className="form-control" placeholder="username" /><br/>

            <input type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)} className="form-control" placeholder="firstName" /><br/>

            <input type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)} className="form-control" placeholder="lastName" /><br/>

            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" placeholder="email" /><br/>

            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="form-control" placeholder="password" /><br/>

            <button onClick={register}className="btn btn-primary">Register</button>
        </div>
    )
}

export default Register;