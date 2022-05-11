import axios from "axios";
import { apiRoute } from './apiRoute'

export const getUnresolvedPendingAdminsHandler = () => {
    return axios
    .get(`${apiRoute}/admin/pending/unresolved`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const getSpecificPendingAdministrator = (pending_admin) => {
    return axios
    .get(`${apiRoute}/admin/pending/${pending_admin.pending_admin_id}`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const getPendingAdminByEmail = (pending_email) => {
    return axios
    .get(`${apiRoute}/admin/pending/${pending_email}`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const createPendingAdministrator = (pending_admin) => {
    return axios
    .post(`${apiRoute}/admin/pending`, { pending_admin })
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const deletePendingAdministrator = (pending_id) => {
    return axios
    .put(`${apiRoute}/admin/pending/${pending_id}/delete`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}