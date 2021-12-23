import React, { useState } from "react";
import "../css/login.css";

const Login = () => {
    const data = [
        {
            username: "Mohammed",
            password: "mohammed",
        },
        {
            username: "Imade",
            password: "imade",
        },
        {
            username: "Mahdi",
            password: "123456",
        },
        {
            username: "Hassan",
            password: "Hassan",
        },
    ];
    const [alert, setAlert] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [users, setUser] = useState(data);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            if (users.find((user) => username === user.username)) {
                setAlert({
                    msg: "user is already exist",
                    type: "red",
                });
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
            } else {
                const newUser = { username: username, password: password };
                setUser([...users, newUser]);
                setAlert({
                    msg: "User Has Been Sucessfully Log In",
                    type: "green",
                });
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
            }
        }
    };

    const handleCancel = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <form className='form_container'>
                <h2 className='sign_in'>Sign In</h2>
                {showAlert && (
                    <div
                        className='alerts_container'
                        style={{
                            backgroundColor: alert.type,
                        }}
                    >
                        {alert.msg}
                        <span
                            className='button_close'
                            onClick={() => setShowAlert(false)}
                        >
                            x
                        </span>
                    </div>
                )}
                <div className='username_container'>
                    <label className='username_label' htmlFor='userName'>
                        UserName
                    </label>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        className='username_input'
                        type='text'
                        name='userName'
                        id='userName'
                        placeholder='Enter Your Username'
                    />
                </div>
                <div className='password_container'>
                    <label className='password_label' htmlFor='password'>
                        password
                    </label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className='password_input'
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Enter Your Password'
                    />
                </div>
                <div className='button_container'>
                    <button
                        type='button'
                        className='button_cancel'
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                    <button
                        type='submit'
                        className='button_login'
                        onClick={handleSubmit}
                    >
                        Log In
                    </button>
                </div>
            </form>
        </>
    );
};

export default Login;
