import axios from "axios";
import { apiRoute } from './apiRoute'
// import { wrapper } from 'axios-cookiejar-support';
// import { CookieJar } from 'tough-cookie';

// axios.defaults.withCredentials = true;
// const jar = new CookieJar();
// const client = wrapper(axios.create({ jar }));

export const loginAdministratorHandler = async (credentials) => {
    // console.log(JSON.stringify(credentials));
    // return axios
    // .post(`${apiRoute}/login`, JSON.stringify(credentials), 
    // {
    //     headers: {"Content-Type": "application/json"},
    //     // jar: cookieJar,
    //     withCredentials: true,
    //     // credentials: 'include'
    // }
    // )
    return axios({
        url: `${apiRoute}/login`,
        method: 'POST',
        data: credentials,
        withCredentials: true,
    })
    .then((response) => {
        console.log(response);
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const validateAdministratorLoginHandler = (token) => {
    // console.log(JSON.stringify(token));
    // const {token} = auth_token;
    // console.log(token);
    // return axios
    // .get(`${apiRoute}/login/validate/?token=${token}`, 
    // {
    //     headers: {"Content-Type": "application/json"},
    //     // jar: jar,
    //     withCredentials: true,
    //     // credentials: 'include'
    // }
    // )
    return axios({
        url: `${apiRoute}/login/validate/?token=${token}`,
        method: 'GET',
        withCredentials: true
    })
    .then((response) => {
        console.log(response);
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const registerAdministratorHandler = (account) => {
    return axios
    .post(`${apiRoute}/register`, { account })
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const resendValidateAdministratorLoginHandler = () => {
    return axios
    .get(`${apiRoute}/login/validate/resend`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const recoverAdministratorPasswordHandler = (admin_email) => {
    return axios
    .post(`${apiRoute}/recover`, JSON.stringify(admin_email))
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const resetAdministratorPasswordHandler = (administrator) => {
    return axios
    .post(`${apiRoute}/reset/${administrator.reset_passwd_token}`, { administrator })
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const validateAdministratorPasswordReset = (token) => {
    return axios
    .get(`${apiRoute}/reset/${token}`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const logoutAdministratorHandler = () => {
    return axios
    .get(`${apiRoute}/logout`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}