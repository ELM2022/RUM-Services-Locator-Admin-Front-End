import axios from "axios";
import { apiRoute } from './apiRoute'

export const getAllPendingAdministratorsHandler = () => {
    return axios
    .get(`${apiRoute}/admin/pending/all`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const getSpecificPendingAdministrator = (administrator) => {
    return axios
    .get(`${apiRoute}/admin/pending/${administrator.admin_id}`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const createPendingAdministrator = (administrator) => {
    return axios
    .post(`${apiRoute}/admin/pending`, { administrator })
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const deletePendingAdministrator = (administrator) => {
    return axios
    .put(`${apiRoute}/admin/pending/${administrator.admin_id}/delete`, { administrator })
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}