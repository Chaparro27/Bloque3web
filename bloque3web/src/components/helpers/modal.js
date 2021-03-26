import React from 'react'
import { useForm } from "react-hook-form";
import { PutUser } from '../../actions/usersaction';

export default function ModalUpdate ({select, idUsuario}) { 
    const { register, handleSubmit } = useForm({defaultValues:select});
    const permisos1 = [ { nombre: "Pagina Inicio", valor: 1 }, { nombre: "Pagina fotos", valor: 2 }, { nombre: "Pagina de ilustraciones", valor: 3 }, { nombre: "Pagina de juegos de mesa", valor: 4 }, { nombre: "Pagina de videojuegos", valor: 5 }]

    const onSubmit = async(data) =>  {
        data.permisos = data.permisos.filter( e => e.permisoid  > 0);
        const id = idUsuario
        const resp = await PutUser(data, `user/update/${id}`);
        window.location.href = window.location.href;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >          
            <div>
                <div>    
                    {/* <img 
                    style={{alignContent:'center'}}
                    width="40%" 
                    src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                    />  */}
                    <div className="form">
                    <input
                        className="auth__input" 
                        type="text" 
                        name="nombre"
                        label={'holaa'}
                        ref={register}
                        />
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
                                    value={(parseInt(e.valor))}
                                    ref={register} type="checkbox"/>
                                <label>{e.nombre}</label>
                                
                            </> 
                        ))
                    }
                </div>
                <button className="button button1" type="submit"  >
                    Guardar
                </button>
            </div>
        </form>
    )
}
