import React from 'react';

export const LoginPage = () => {


    const handleLogin = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <div className="auth__main">
            <div className="auth__box-container">
                <h3 className="auth__title">Login</h3>
                <form 
                    onSubmit={ handleLogin }
                    className="animate__animated animate__fadeIn animate__faster"
                    >
                    <input 
                        type="text"
                        placeholder="Email"
                        name="email"
                        className="auth__input"
                        autoComplete="off"/>

                    <input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="auth__input"/>

                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        >
                        Login
                    </button>

                </form>
            </div>
        </div>
        </>
    )
}
