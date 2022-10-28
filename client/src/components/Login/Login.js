import { useState } from "react";

export default function Login() {

    const [signIn, setSignIn] = useState({
        
        email: "",
        password: "",
      });

    const handleSubmit = async (event) => {
        event.preventDefault();
    };
    const handleChangeSignIn = (e) => {
        setSignIn({ ...signIn, [e.target.name]: e.target.value });
      };
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    E-mail
                    <input type="email" autoComplete="email" name="email"
                     value={signIn.email}  onChange={handleChangeSignIn} required/>
                </label>
                <label>
                    Password
                    <input type="password" autoComplete="current-password" name="password"
                     value={signIn.password}  onChange={handleChangeSignIn} required/>
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    );
}
