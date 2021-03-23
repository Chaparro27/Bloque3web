import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useCookies, withCookies } from 'react-cookie';


import AdminPrivateRoute from './AdminPrivateRoute';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import HomeAdmin from '../pages/homeAdmin';
import LoginPage from '../pages/LoginPage';
import HomeUser from '../pages/HomeUser';

const AppRouter = () => {
    
    const [cookies] = useCookies(['c_user'])
    console.log(cookies.c_user)
    return (
        <Router>
            <Switch>
                <AdminPrivateRoute 
                    path="/dashboard" 
                    component={ HomeAdmin }
                    isAuthenticated={ cookies.c_user === undefined ? false : cookies.c_user.isLogged }
                    adminUser={ cookies.c_user === undefined ? false : cookies.c_user.isadmin }
                    />
                <PublicRoute 
                    path="/auth" 
                    component={ LoginPage } 
                    isAuthenticated={ cookies.c_user === undefined ? false : cookies.c_user.isLogged }
                    adminUser={ cookies.c_user === undefined ? false : cookies.c_user.isadmin }
                    /> 
                <PrivateRoute 
                    path="/" 
                    component={ HomeUser }
                    isAuthenticated={ cookies.c_user === undefined ? false : cookies.c_user.isLogged }
                    adminUser={ cookies.c_user === undefined ? false : cookies.c_user.isadmin }
                    />
                
            </Switch>
        </Router>
    )
}

export default withCookies(AppRouter);
