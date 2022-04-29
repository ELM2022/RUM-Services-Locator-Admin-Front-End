import axios from "axios";
import { apiRoute } from './apiRoute'

export const allAdministratorsHandler = () => {
    return axios
    .get(`${apiRoute}/admin/active`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const administratorGetHandler = (admin_id) => {
    return axios
    .get(`${apiRoute}/admin/${admin_id}`)
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

export const administratorDeleteHandler = (admin_id) => {
    return axios
    .put(`${apiRoute}/admin/${admin_id}/delete`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}
