import "./login.css"

import { useNavigate } from "react-router";
import { useState } from "react";
import { MyInput } from "./MyInpt";

import axios from "axios";
import { useAuth } from "../../utils/functions";
import { API } from "../../utils/constans";




export const Login = () => {

    const { handleAuthResult } = useAuth();

    const [isSignUped, setSignUp] = useState(false)

    const [email, setEmail] = useState<string>('mrbushido21@ukr.net')
    const [password, setPassword] = useState<string>('qwert78yui')
    const [username, setUsername] = useState<string>('Oleg')

    const navigate = useNavigate()

     const handleSubmit = (e: any) => {
        e.preventDefault();

        let newUser = {
            email,
            password,
            username,
            avatarUrl: 'https://th.bing.com/th/id/OIP.OlnxO753VRgHKDLLDzCKoAHaHw?rs=1&pid=ImgDetMain',
            profileBg: ''
        }

        let existingUser = {
            email,
            password 
        }


        if (isSignUped) {
            axios.post(`${API}/register`, newUser)
            .then(({data}) => {
                handleAuthResult(data)
                localStorage.setItem('token', data.token)
                navigate('/')
            })
            .catch((err) => alert(err.response.data))           
            
        } else {
            axios.post(`${API}/login`, existingUser)
            .then(({data}) => {
                console.log(data);              
                handleAuthResult(data)
                localStorage.setItem('token', data.token)
                navigate('/')
            })
            .catch((err) => alert(err.response.data))
        }    
    }
    

    return (
        <div className="Login h-screen text-slate-50">
            <div className="container">
                <h2 className="text-4xl font-bold text-center my-20">Hello, Log in please:</h2>
                <form onSubmit={handleSubmit} className="max-w-2xl border m-auto flex flex-col items-center p-4">
                    <MyInput value={email} onChange={setEmail} id="email" labelValue="Your email:" placeholder="Email.." type="email" />
                    <MyInput value={password} onChange={setPassword} id="password" labelValue="Your password:" placeholder="Password.." type="password" />
                    {
                        isSignUped &&                   
                        <MyInput 
                        value={username} 
                        onChange={setUsername} 
                        id="username" 
                        labelValue="Your username:" 
                        placeholder="Username.." 
                        type="text" 
                        />  
                    }
                    <div>
                        If you are {isSignUped ? "" : "not"} registered, please click <span
                            className="underline cursor-pointer"
                            onClick={() => { setSignUp(!isSignUped) }}
                        >
                            here
                        </span>
                    </div>

                    <button className="btnLogin my-4 border py2 px-4 rounded">{isSignUped ? "Sign Up" : "Log in"}</button>
                </form>
            </div>
        </div>
    );
}