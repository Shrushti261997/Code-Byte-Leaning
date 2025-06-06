import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/AuthForm.css";

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className="container">
            <div className="form-container">
                <div className="form-toggle">
                    <button
                        className={isLogin ? "active" : ""}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        className={!isLogin ? "active" : ""}
                        onClick={() => setIsLogin(false)}
                    >
                        Sign Up
                    </button>
                </div>
                {isLogin ? (
                    <React.Fragment>
                        <div className="form">
                            <h2>Login form </h2>
                            <input
                                type="email"
                                placeholder="Enter your email id"
                                className="input-field"
                            />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="input-field"
                            />
                            <Link to="forgot">Forgot password</Link>
                            <button className="submit-btn">Login</button>
                            <p>
                                Not a Member ?{" "}
                                <a href="#" onClick={() => setIsLogin(false)}>
                                    {" "}
                                    signup
                                </a>
                            </p>
                        </div>
                    </React.Fragment>
                ) : null}
                {!isLogin ? (
                    <div className="form">
                        <h2>Sign Up form</h2>
                        <input
                            type="email"
                            placeholder="Enter your email id"
                            className="input-field"
                        />
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="input-field"
                        />
                        <button>Sign Up</button>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
