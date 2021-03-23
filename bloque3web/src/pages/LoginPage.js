import React from 'react';
import { Formik, Field } from 'formik';
import { startLoginEmailPassword } from '../actions/usersaction';
import { useCookies } from 'react-cookie';

const LoginPage = () => {
    
    const [, setCookies] = useCookies(['c_user'])
    return (
        <>
        <div className="auth__main">
            <div className="auth__box-container">
                <h3 className="auth__title">Login</h3>
                <Formik
                    initialValues={{contraseña:'', email:'' }}
                    onSubmit={async (data, { setSubmitting }) => {
                        setSubmitting(true);
                        await startLoginEmailPassword(data,"auth/login",setCookies);
                        
                        setSubmitting(false);
                    }}
                >
                    {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
                        <form 
                            onSubmit={ handleSubmit }
                            className="animate__animated animate__fadeIn animate__faster"
                            >
                            <input 
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur} 
                                className="auth__input"
                                autoComplete="off"/>

                            <input 
                                type="password"
                                placeholder="Contraseña"
                                value={values.contraseña}
                                onChange={handleChange}
                                onBlur={handleBlur} 
                                name="contraseña"
                                className="auth__input"/>

                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                >
                                Login
                            </button>

                        </form>
                    )}
                </Formik>
            </div>
        </div>
        </>
    )
}

export default LoginPage;