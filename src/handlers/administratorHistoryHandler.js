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

export const getSpecificAdministratorUpdatesHistoryHandler = (administrator) => {
    return axios
    .get(`${apiRoute}/admin/updates/${administrator.admin_id}`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const addAdministratorUpdateHandler = (update) => {
    return axios
    .post(`${apiRoute}/admin/updates`, { update })
    .then((response) => {
        return response;
    })
    .then((err) => {
        return err.response;
    })
}