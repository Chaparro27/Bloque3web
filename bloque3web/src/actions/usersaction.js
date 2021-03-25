import  Swal from 'sweetalert2';
import Axios from "axios";

const BaseUrl = "http://localhost:3000/";


export const startLoginEmailPassword = async( data, url, setCookies ) => {
    await Axios.post(BaseUrl+url, data).then( resp => {
        let response = resp.data;
        response.isLogged = true;
        response.tipousaurio !== 2 ? response.isadmin = false : response.isadmin = true;
        setCookies('c_user', response, { path:'/', expires: new Date(Date.now()+ 1*60*24*365*365*365) })
    }).catch(e => {
        Swal.fire('Error', e.message, 'error');
    });
}

export const GetUsers = async (url) => {
    let response;
    await Axios.get(BaseUrl+url).then( resp => {
        response = resp.data;
    }).catch( e => {
        Swal.fire('Error', e.message, 'error');
    });
    return response;
}

export const DeleteUser = async (url) => {
    let response;
    await Axios.delete(BaseUrl+url).then( resp => {
        response = resp.data;
    }).catch( e => {
        Swal.fire('Error', e.message, 'error');
    });

    return response

}


export const CreateUser = async (data, url) => {
    let response;
    await Axios.post(BaseUrl+url, data).then( resp => {
        response = resp.data;
    }).catch( e => {
        console.log(e.response)
        Swal.fire('Error', e.message, 'error');
    });


    return response;
}