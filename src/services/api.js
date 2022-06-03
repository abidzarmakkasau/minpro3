import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:8000";

export const getAllProducts = () => {
    return axios.get(`${BASE_URL}/products`);
};

export const getProductById = (id) => {
    return axios.get(`${BASE_URL}/products/${id}`);
};

export const login = (name, password) => {
    const bodyJSON = {
        name: name,
        password: password,
    };

    return axios.post(`${BASE_URL}/auth/login`, bodyJSON);
};

export const register = (name, address, phone_number, password) => {
    const bodyJSON = {
        name,
        address,
        phone_number,
        password,
    };

    return axios.post(`${BASE_URL}/auth/register`, bodyJSON);
};

export const deleteProduct = (id) => {
    const token = Cookies.get("token");

    const headerConfig = {
        headers: {
            Authorization: "Bearer " + token,
        },
    };

    return axios.delete(`${BASE_URL}/products/${id}`, headerConfig);
};

export const addProduct = (name, quantity, price, imageUrl) => {
    const bodyJSON = {
        name,
        quantity,
        price,
        imageUrl,
    };

    const token = Cookies.get("token");

    const headerConfig = {
        headers: {
            Authorization: "Bearer " + token,
        },
    };

    return axios.post(`${BASE_URL}/products`, bodyJSON, headerConfig);
};
