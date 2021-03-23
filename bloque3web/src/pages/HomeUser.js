import { React, useState } from 'react';
import { useCookies } from 'react-cookie';

import Sidebar from '../components/Sidebar';
import Inicio from './fragments/Inicio';

const HomeUser = () => {

    const [cookies, removeCookie] = useCookies(['c_user']);
    const [tap, setTap] = useState(0);

    const ViewPanel = () => {
        switch (tap) {
            case 1:
                return <Inicio />;
            case 2:
                return <div> Fotos </div>;
            case 3:
                return <div> Ilustraciones</div>;
            case 4:
                return <div> Juegos de mesa </div>;
            case 5:
                return <div> Videojuegos </div>;
            default:
                return <Inicio />;
        }
    }

    return (
        <>
            <Sidebar cookies={cookies} removeCookie={removeCookie} />
            <div className="tab">
                {
                    cookies.c_user.permisos.map( permiso => 
                        <button onClick={ () => setTap(permiso.permisoid) } >{permiso.nombre}</button>
                    )
                }
            </div>
            {ViewPanel()}
        </>
    );
}

export default HomeUser;