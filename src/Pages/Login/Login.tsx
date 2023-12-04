import { useState } from "react";
import { MyInput } from "./MyInpt";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { error } from "console";
import { useAppDispatch } from "../../store/hooks";
import { setUser } from "../../store/user/userSlice";

type PropsType = {}
export const Login = ({ }: PropsType) => {
    const [isSignUped, setSignUp] = useState(false)

    const [emailValue, setEmailValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')
    const [usernameValue, setUsernameValue] = useState<string>('')
    const [imageValue, setImageValue] = useState<string>('')

    const dispatch = useAppDispatch()

    const handleSubmit = (e:any) => {
        e.preventDefault()
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                }))
            })
            .catch()
    }
    


    return (
        <div className="Login h-screen text-slate-50">
            <div className="container">
                <h2 className="text-4xl font-bold text-center my-20">Hello, Log in please:</h2>
                <form onSubmit={handleSubmit} className="max-w-2xl border m-auto flex flex-col items-center p-4">
                    <MyInput value={emailValue} onChange={setEmailValue} id="email" labelValue="Your email:" placeholder="Email.." type="email" />
                    <MyInput value={passwordValue} onChange={setPasswordValue} id="password" labelValue="Your password:" placeholder="Password.." type="password" />
                    {
                        isSignUped
                            ? null
                            : <div>
                                If you are not registered, please click <span
                                    className="underline cursor-pointer"
                                    onClick={() => { setSignUp(true) }}
                                >
                                    here
                                </span>
                            </div>
                    }


                    <button className="btnLogin my-4 border py2 px-4 rounded">{isSignUped ? "Sign Up" : "Log in"}</button>
                </form>
            </div>
        </div>
    );
}