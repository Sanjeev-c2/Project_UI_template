import React, { useState } from 'react';
import '../Styles/Loginpage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate("")

    // useState for signup
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [c_alert, setAlert] = useState({ message: "", type: "" });

    //useState for login
    const [l_username,setL_username] = useState("");
    const [l_password, setL_password] = useState("");

    function signupLink(e) {
        e.preventDefault();
        setIsLogin(false);
    }

    function loginLink(e) {
        e.preventDefault();
        setIsLogin(true);
    }

    function signup(e) {
        e.preventDefault();
        if (password === confirmPassword) {
            const data = { username, password };
            axios.post("http://localhost:8000/api/signup/", data)
                .then((res) => {
                    console.log(res.data);
                    setAlert({ message: "Signup successful! Redirecting to login...", type: "success" });
                    // Clear the form fields and switch to login form after a short delay
                    setTimeout(() => {
                        setIsLogin(true);
                        setUsername("");
                        setPassword("");
                        setConfirmPassword("");
                        setAlert({ message: "", type: "" }); // Clear alert
                    }, 2000); // Delay for user to see the success message
                })
                .catch((err) => {
                    console.log(err);
                    setAlert({ message: "Couldn't save the data!", type: "error" });
                });
        } else {
            setAlert({ message: "Password Mismatch!", type: "error" });
        }
    }

    function login(e){
        e.preventDefault()
        const data = {username:l_username,password:l_password}
        axios.post("http://localhost:8000/api/login/",data)
        .then((res)=>{
            console.log(res.data);
            alert("Logging Successful!!!")
            navigate("/navbar")         
        })
        .catch((err)=>{
            console.log(err);
            alert("Invalid Username or Password!!!")
        })
    }

    return (
        <div className="loginpage">
            <div className="title-text">
                <div className={`title ${isLogin ? 'login' : 'signup'}`}>
                    {isLogin ? 'Login Form' : 'Signup Form'}
                </div>
            </div>
            <div className="form-container">
                <div className="slide-controls">
                    <input type="radio" name="slide" id="login" checked={isLogin} onChange={loginLink} />
                    <input type="radio" name="slide" id="signup" checked={!isLogin} onChange={signupLink} />

                    <label
                        htmlFor="login"
                        className={`slide login ${isLogin ? 'active' : ''}`}
                        onClick={loginLink}
                    >
                        Login
                    </label>

                    <label
                        htmlFor="signup"
                        className={`slide signup ${!isLogin ? 'active' : ''}`}
                        onClick={signupLink}
                    >
                        Signup
                    </label>

                    <div className="slider-tab"></div>
                </div>
                <div className="form-inner">
                    {isLogin ? (
                        <form className="login" onSubmit={login}>
                            <div className="field">
                                <input
                                    type="text"
                                    placeholder="Enter username"
                                    required
                                    value={l_username}
                                    onChange={(e)=>{setL_username(e.target.value)}}
                                />
                            </div>
                            <div className="field">
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    required
                                    value={l_password}
                                    onChange={(e)=>{setL_password(e.target.value)}}
                                />
                            </div>
                            <div className="pass-link"><a href="#">Forgot password?</a></div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <button>Login</button>
                            </div>
                            <div className="signup-link">
                                Not a member? <a href="#" onClick={signupLink}>Signup here</a>
                            </div>
                        </form>
                    ) : (
                        <form className="signup" onSubmit={signup}>
                            <div className="field">
                                <input
                                    type="text"
                                    placeholder="Enter your username"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            {c_alert.message && (
                                <p style={{
                                    color: c_alert.type === "error" ? "red" : "green",
                                    position: "relative",
                                    marginTop: "10px",
                                    textAlign: "center"
                                }}>
                                    {c_alert.message}
                                </p>
                            )}
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <button type="submit">Signup</button>
                            </div>
                            <div className="signup-link">
                                Already a member? <a href="#" onClick={loginLink}>Login here</a>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
