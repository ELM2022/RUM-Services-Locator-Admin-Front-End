import axios from "axios";
import { apiRoute } from './apiRoute'

export const getAllBuildingsHandler = () => {
    return axios
    .get(`${apiRoute}/buildings`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const getSpecificBuildingHandler = (building) => {
    return axios
    .get(`${apiRoute}/buildings/${building.building_id}`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const createBuilding = (building) => {
    return axios
    .post(`${apiRoute}/buildings`, { building })
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const updateBuilding = (building) => {
    return axios
    .put(`${apiRoute}/buildings/${building.building_id}`, { building })
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}