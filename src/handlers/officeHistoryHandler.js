import axios from "axios";
import { apiRoute } from './apiRoute'

export const getAllOfficesUpdateHistoryHandler = () => {
    return axios
    .get(`${apiRoute}/offices/updates/all`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const getSpecificOfficeUpdatesHistoryHandler = (office) => {
    return axios
    .get(`${apiRoute}/offices/updates/${office.office_id}`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const addOfficeUpdateHandler = (update) => {
    return axios
    .put(`${apiRoute}/offices/updates`, { update })
    .then((response) => {
        return response;
    })
    .then((err) => {
        return err.response;
    })
}