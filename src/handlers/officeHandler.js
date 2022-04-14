import axios from "axios";
import { apiRoute } from './apiRoute'

export const allOfficesHandler = () => {
    return axios
    .get(`${apiRoute}/offices`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const officeGetHandler = (office) => {
    return axios
    .get(`${apiRoute}/offices/${office.office_id}`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const officeUpdateHandler = (office) => {
    return axios
    .put(`${apiRoute}/offices/${office.office_id}`, { office })
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const officeCreateHandler = (office) => {
    return axios
    .post(`${apiRoute}/offices`, { office })
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const officeDeleteHandler = (office) => {
    return axios
    .put(`${apiRoute}/offices/delete/${office.office_id}`, { office })
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}
