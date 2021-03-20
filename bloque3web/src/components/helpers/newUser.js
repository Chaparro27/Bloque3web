import React from 'react'
import { Formik, Field } from 'formik';
import '../../styles.css';

const newUser =()=>{
    return (
        <Formik 
        initialValues={{usuario:'', email:'', password:'', permisos:[]}}
        onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        console.log("submit", data)
                    //make async call
        setSubmitting(false);
          }}
        >
          {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>          
            <div className="containerCard">
                <div className="contentCard">                      
                <img width="40%" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'/> 
                <div className="form">
                <input type="text" 
                 name="usuario"
                 value={values.usuario}
                 onChange={handleChange}
                 onBlur={handleBlur} 
                placeholder="Nombre"/>
                <br/>
                <input type="email" 
                 name="email"
                 value={values.email}
                 onChange={handleChange}
                 onBlur={handleBlur} 
                placeholder="Correo"/>
                <br/>
                <input type="password" 
                 name="password"
                 value={values.password}
                 onChange={handleChange}
                 onBlur={handleBlur} 
                placeholder="Contraseña"/>
                </div>
                </div>
            <div className="Check">
                <Field value="inicio" name="permisos" value="Pagina Inicio" type="checkbox"/>
                <label>Página inicio</label>
                <Field value ="fotos" name="permisos" value="Pagina fotos" type="checkbox"/>
                <label>Página fotos</label>
                <Field value="ilustraciones" name="permisos" value="Pagina ilustraciones" type="checkbox"/>
                <label>Página ilustraciones</label>
            </div>
            <div className="Check">
                <Field value="juegos mesa" name="permisos" value="Pagina juegos mesa" type="checkbox"/>
                <label>Página juegos mesa</label>
                <Field value="videojuegos" name="permisos" value="Pagina videojuegos" type="checkbox"/>
                <label>Página videojuegos </label>
            </div>

            <button class="button button1" type="submit" disabled={isSubmitting} >Guardar Nuevo</button>

            </div>
            </form>
             )}
</Formik>
    )
}

export default newUser