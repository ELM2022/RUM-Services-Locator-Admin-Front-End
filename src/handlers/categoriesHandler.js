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