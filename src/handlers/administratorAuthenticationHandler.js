import axios from "axios";
import { apiRoute } from './apiRoute'

export const loginAdministratorHandler = async (credentials) => {
    return axios({
        url: `${apiRoute}/login`,
        method: 'POST',
        data: credentials,
        withCredentials: true,
    })
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const validateAdministratorLoginHandler = (token) => {
    return axios({
        url: `${apiRoute}/login/validate`,
        method: 'POST',
        data: token,
        withCredentials: true
    })
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const registerAdministratorHandler = (administrator) => {
    return axios
    .post(`${apiRoute}/register`, { administrator })
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const resendValidateAdministratorLoginHandler = (admin) => {
    return axios
    .post(`${apiRoute}/login/validate/resend`, admin)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const recoverAdministratorPasswordHandler = (admin_email) => {
    return axios
    .post(`${apiRoute}/recover`, {admin_email})
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const resetAdministratorPasswordHandler = (administrator) => {
    return axios
    .post(`${apiRoute}/reset/${administrator.reset_passw_token}`, { administrator })
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
    .post(`${apiRoute}/logout`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}