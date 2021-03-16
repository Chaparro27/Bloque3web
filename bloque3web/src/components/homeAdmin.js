import React from 'react'
import '../styles.css';
import TableUsers from '../components/helpers/UsersTable.js'


const HomeAdmin=()=>{

    return(
        <div className="container-admin">
            <div className="Card-newUser">            
                <div className="containerCard">
                    <div className="contentCard">                      
                    <img width="40%" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'/> 
                    <div className="form">
                    <input type="text"  placeholder="Nombre"/>
                    <br/>
                    <input type="email"  placeholder="Correo"/>
                    <br/>
                    <input type="password"  placeholder="Contraseña"/>
                    </div>
                    </div>
                <div className="Check">
                    <input type="checkbox"/>
                    <label>Página inicio</label>
                    <input type="checkbox"/>
                    <label>Página fotos</label>
                    <input type="checkbox"/>
                    <label>Página ilustraciones</label>
                </div>
                <div className="Check">
                <input type="checkbox"/>
                    <label>Página juegos mesa</label>
                    <input type="checkbox"/>
                    <label>Página videojuegos </label>
                </div>
                <div className="buttons" >
                <button class="button">Guardar Nuevo</button>
                </div>
                </div>
                <div>
                    <TableUsers/>
                {/* <table>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Savings</th>
                </tr>
                <tr>
                    <td>Peter</td>
                    <td>Griffin</td>
                    <td>$100</td>
                </tr>
                <tr>
                    <td>Lois</td>
                    <td>Griffin</td>
                    <td>$150</td>
                </tr>
                <tr>
                    <td>Joe</td>
                    <td>Swanson</td>
                    <td>$300</td>
                </tr>
                <tr>
                    <td>Cleveland</td>
                    <td>Brown</td>
                    <td>$250</td>
                </tr>
                </table> */}
                </div>
            </div>   
        </div>
    )
}
export default HomeAdmin