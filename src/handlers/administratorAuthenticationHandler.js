import axios from "axios";
import { apiRoute } from './apiRoute'

export const loginAdministratorHandler = (administrator) => {
    return axios
    .post(`${apiRoute}/login`, { administrator })
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

export const validateAdministratorLoginHandler = (administrator) => {
    return axios
    .post(`${apiRoute}/login/validate`, { administrator })
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

export const recoverAdministratorPasswordHandler = (administrator) => {
    return axios
    .post(`${apiRoute}/recover`, { administrator })
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

export const validateAdministratorPasswordReset = (administrator) => {
    return axios
    .get(`${apiRoute}/reset/${administrator.reset_passwd_token}`, { administrator })
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