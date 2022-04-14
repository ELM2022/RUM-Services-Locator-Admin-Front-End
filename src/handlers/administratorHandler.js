import axios from "axios";
import { apiRoute } from './apiRoute'

export const allAdministratorsHandler = () => {
    return axios
    .get(`${apiRoute}/admin`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const administratorGetHandler = (administrator) => {
    return axios
    .get(`${apiRoute}/admin/${administrator.admin_id}`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const administratorUpdateHandler = (administrator) => {
    return axios
    .put(`${apiRoute}/admin/${administrator.admin_id}`, { administrator })
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const administratorCreateHandler = (administrator) => {
    return axios
    .post(`${apiRoute}/admin`, { administrator })
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const administratorDeleteHandler = (administrator) => {
    return axios
    .put(`${apiRoute}/admin/${administrator.admin_id}`, { administrator })
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}
