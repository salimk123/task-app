import React, { Component, useState } from 'react'
import { useHistory } from 'react-router'

function User(){
            const [name , setName] = useState('');
            const [password , setPassword] = useState('');
        const history = useHistory();
        const logout = () => {
                history.push('/');
        }
        const handleChange =(e) => {
            setName(e.target.value)
            setPassword(e.target.value)
        }
        return (
            <div className="login">
                <label>
                 Username:               
                <  input type="text" 
                    placeholder="enter name"
                    value={name}
                    name="user" onChange={handleChange} /> <br /> <br />
                    </label>
                    <label>
                Password:
                <input
                    placeholder="enter password"
                    type="password" name="password" value={password} onChange={handleChange} /> <br /> <br />
                <div className="pwd">
                <button style={{color:"green", background:"silver"}} onClick={() => {}} >Change Password</button>
                <button style={{color:"green", background:"silver"}}onClick={logout} >Logout</button>
                
            </div>
            </label>
            </div>
        )
    } 
export default User;