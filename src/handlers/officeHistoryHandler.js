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

export const getSpecificOfficeUpdatesHistoryHandler = (update_office_id) => {
    return axios
    .get(`${apiRoute}/offices/updates/${update_office_id}`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const addOfficeUpdateHandler = (office_update) => {
    return axios
    .post(`${apiRoute}/offices/updates`, { office_update })
    .then((response) => {
        if(response.status === 201){
            alert("Office has been updated succesfully")
        }
        return response;
    })
    .then((err) => {
        return err.response;
    })
}