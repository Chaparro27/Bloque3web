import  Swal from 'sweetalert2';
import Axios from "axios";

const BaseUrl = "http://localhost:3000/";


export const startLoginEmailPassword = ( data, url, setCookies ) => {
    return async( ) => {
        await Axios.post(BaseUrl+url, data).then( resp => {
            console.log(resp.data)
            // setCookies('c_user', resp.data, { path:'/', expires: new Date(Date.now()+ 1*60*24*365*365*365) })
        }).catch(e => {
            Swal.fire('Error', e.message, 'error');
        });
    }
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
    console.log(data);
    // await Axios.post(BaseUrl+url, data).then( resp => {
    //     response = resp.data;
    // }).catch( e => {
    //     console.log(e.response)
    //     Swal.fire('Error', e.message, 'error');
    // });


    return response;
}