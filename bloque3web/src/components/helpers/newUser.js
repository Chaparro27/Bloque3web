import React from 'react'
import { Formik, Field } from 'formik';
import { CreateUser } from '../../actions/usersaction';

const newUser = () => { 
    const permisos1 = [ { nombre: "Pagina Inicio", valor: 1 }, { nombre: "Pagina fotos", valor: 2 }, { nombre: "Pagina de ilustraciones", valor: 3 }]
    const permisos2 = [ { nombre: "Pagina de juegos de mesa", valor: 4 }, { nombre: "Pagina de videojuegos", valor: 5 } ]
    
    return (
        <Formik key="formik"
            initialValues={{nombre:'', email:'', contraseña:'', permisos: [] }}
            onSubmit={async (data, { setSubmitting }) => {
                setSubmitting(true);
                let resp = await CreateUser(data, "user/create");
                console.log(resp);
                setSubmitting(false);
            }}
            >
            {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
                <form onSubmit={handleSubmit}>          
                    <div className="containerCard">
                        <div className="contentCard">                      
                            <img 
                                width="40%" 
                                src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                                /> 
                            <div className="form">
                                <input
                                    className="auth__input" 
                                    type="text" 
                                    name="nombre"
                                    value={values.usuario}
                                    onChange={handleChange}
                                    onBlur={handleBlur} 
                                    placeholder="Nombre"/>
                                <br/>
                                <input
                                    className="auth__input" 
                                    type="email" 
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur} 
                                    placeholder="Correo"/>
                                <br/>
                                <input
                                    className="auth__input" 
                                    type="password" 
                                    name="contraseña"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur} 
                                    placeholder="Contraseña"/>
                            </div>
                        </div>
                        <div className="Check">
                            {
                                permisos1.map(e => (
                                    <>
                                        <Field key={e.valor} name="permisos" value={e.nombre} type="checkbox"/>
                                        <label>{e.nombre}</label>
                                    </> 
                                ))
                            }
                        </div>
                        <div className="Check">
                            {
                                permisos2.map(e => (
                                    <>
                                        <Field value={e.valor} name="permisos.permisoid" value={e.nombre} type="checkbox"/>
                                        <label>{e.nombre}</label>
                                    </> 
                                ))
                            }
                        </div>

                        <button className="button button1" type="submit" disabled={isSubmitting} >
                            Guardar Nuevo
                        </button>

                    </div>
                </form>
            )}
</Formik>
    )
}

export default newUser