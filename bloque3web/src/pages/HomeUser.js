import { React, useState } from 'react';
import { useCookies } from 'react-cookie';

import Sidebar from '../components/Sidebar';
import Fotos from './fragments/Fotos';
import Ilustraciones from './fragments/Ilustraciones';
import Inicio from './fragments/Inicio';
import JMesa from './fragments/JMesa';
import Videojuegos from './fragments/Videojuegos';

const HomeUser = () => {

    const [cookies, removeCookie] = useCookies(['c_user']);
    const [tap, setTap] = useState(0);

    const ViewPanel = () => {
        switch (tap) {
            case 1:
                return <Inicio />;
            case 2:
                return <Fotos />;
            case 3:
                return <Ilustraciones />;
            case 4:
                return <JMesa />;
            case 5:
                return <Videojuegos />;
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