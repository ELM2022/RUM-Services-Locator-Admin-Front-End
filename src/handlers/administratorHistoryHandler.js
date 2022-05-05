import axios from "axios";
import { apiRoute } from './apiRoute'

export const getAllAdministratorUpdateHistoryHandler = () => {
    return axios
    .get(`${apiRoute}/admin/updates/all`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const getSpecificAdministratorUpdatesHistoryHandler = (update_admin_id) => {
    return axios
    .get(`${apiRoute}/admin/updates/${update_admin_id}`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const addAdministratorUpdateHandler = (admin_update) => {
    return axios
    .post(`${apiRoute}/admin/updates`, { admin_update })
    .then((response) => {
        return response;
    })
    .then((err) => {
        return err.response;
    })
}