import React from 'react'
import '../styles.css';
const NavBar =()=>{
    return(

            <ul>
                <li><a href="#home">Administrador</a></li>
                <li style="float:right"><a class="active" href="#about">Salir</a></li>
            </ul>
        
    )
}
export default NavBar