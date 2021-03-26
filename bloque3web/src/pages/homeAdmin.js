import React from 'react';
import TableUsers from '../components/helpers/TableUsers.js'
import NewUser from '../components/helpers/newUser.js'
import Navbar from '../components/navbar.js'
import Sidebar from '../components/Sidebar.js';

import { useCookies } from 'react-cookie';

const HomeAdmin=()=>{

    const [cookies, removeCookie] = useCookies(['c_user']);
    return(
        <>
        <Sidebar cookies={cookies} removeCookie={removeCookie}/>
        <div className="container-admin">
            <div className="Card-newUser">            
                    <NewUser/>
                <div>
                    <TableUsers/>
                </div>
            </div>   
        </div>
        </>

    )
}
export default HomeAdmin