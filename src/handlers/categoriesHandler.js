import axios from "axios";
import { apiRoute } from './apiRoute'

export const getAllCategoriesHandler = () => {
    return axios
    .get(`${apiRoute}/category/`)
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

export const getCategoryByIDHandler = (category_id) => {
    return axios
    .get(`${apiRoute}/category/${category_id}`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const editCategoryHandler = (category) => {
    return axios
    .put(`${apiRoute}/category/${category.category_id}`, category)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const deleteCategoryHandler = (category_id) => {
    return axios
    .put(`${apiRoute}/category/${category_id}/delete`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}

export const getAllActiveCategories = () => {
    return axios
    .get(`${apiRoute}/category/active`)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err.response;
    })
}
