import React from 'react';
import TableUsers from '../components/helpers/TableUsers.js'
import NewUser from '../components/helpers/newUser.js'
import Navbar from '../components/navbar.js'

const HomeAdmin=()=>{

    return(
        <div className="container-admin">
            <div className="Card-newUser">            
                    <NewUser/>
                <div>
                    <TableUsers/>
                </div>
            </div>   
        </div>

    )
}
export default HomeAdmin