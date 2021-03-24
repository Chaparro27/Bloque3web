import React from 'react'
import { useForm } from "react-hook-form";
import { CreateUser } from '../../actions/usersaction';
import { getDefaultNormalizer } from '@testing-library/dom';

export default function NewUser () { 
    const { register, handleSubmit } = useForm({
      });
    const permisos1 = [ { nombre: "Pagina Inicio", valor: 1 }, { nombre: "Pagina fotos", valor: 2 }, { nombre: "Pagina de ilustraciones", valor: 3 }, { nombre: "Pagina de juegos de mesa", valor: 4 }, { nombre: "Pagina de videojuegos", valor: 5 }]
    const permisos2 = [ { nombre: "Pagina de juegos de mesa", valor: 4 }, { nombre: "Pagina de videojuegos", valor: 5 } ]
    const onSubmit = async(data) =>  {const resp = await CreateUser(JSON.stringify(data), "user/create");
    console.log(resp)
    // const onSubmit = (data) =>  console.log(data)
    }
    return (

                <form onSubmit={handleSubmit(onSubmit)} >          
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
                                    ref={register}
                                    placeholder="Nombre"/>
                                <br/>
                                <input
                                    className="auth__input" 
                                    type="email" 
                                    name="email"
                                    ref={register}
                                    placeholder="Correo"/>
                                <br/>
                                <input
                                    className="auth__input" 
                                    type="password" 
                                    name="contraseña" 
                                    ref={register}
                                    placeholder="Contraseña"/>
                            </div>
                        </div>
                        <div className="Check">
                            {
                                permisos1.map((e, index) => (
                                    <>
                                        <input key={index}
                                         name={`permisos[${index}].permisoid`}
                                         value={e.valor}
                                         ref={register} type="checkbox"/>
                                        <label>{e.nombre}</label>
                                        
                                    </> 
                                ))
                            }
                        </div>
            {/* <div className="Check">
                <input  name="permisos[0].permisoid" value="1" ref={register} type="checkbox"/>
                <label>Página inicio</label>
                <input name="permisos[1].permisoid" value="2" ref={register}  type="checkbox"/>
                <label>Página fotos</label>
                <input name="permisos[2].permisoid"  value="3" ref={register}  type="checkbox"/>
                <label>Página ilustraciones</label>
            </div>
            <div className="Check">
                <input name="permisos[3].permisoid"  value="4" ref={register} type="checkbox"/>
                <label>Página juegos mesa</label>
                <input name="permisos[4].permisoid"  value="5" ref={register} type="checkbox"/>
                <label>Página videojuegos </label>
            </div> */}

                        <button className="button button1" type="submit"  >
                            Guardar Nuevo
                        </button>

                    </div>
                </form>
    )
}
