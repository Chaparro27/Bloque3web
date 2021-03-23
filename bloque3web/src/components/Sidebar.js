import React from 'react';

const Sidebar = ({ cookies, removeCookie}) => {
    
    const Logouthandler = () => {
        removeCookie('c_user');
    }
    return (
        <>
            <div className="navbar__content">
                <h3>{cookies.c_user.nombre} </h3>

                <button onClick={Logouthandler}>Log out</button>
            </div>
        </>
    )
}

export default Sidebar;