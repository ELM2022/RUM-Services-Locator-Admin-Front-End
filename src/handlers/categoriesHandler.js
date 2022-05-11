import axios from "axios";
import { apiRoute } from './apiRoute'

export const getAllCategoriesHandler = () => {
    return axios
    .get(`${apiRoute}/category`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const getOfficeCategoriesHandler = (office_id) => {
    return axios
    .get(`${apiRoute}/offices/${office_id}/category`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const addCategoryHandler = (category) => {
    return axios
    .post(`${apiRoute}/category`, category)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const addCategoryMembershipHandler = (membership) => {
    const categories = membership.categories;
    return axios
    .post(`${apiRoute}/offices/${membership.office_id}/category`, {categories})
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const deleteOfficeCategoriesHandler = (office_id) => {
    return axios
    .delete(`${apiRoute}/offices/${office_id}/category`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}