import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const getAllProducts = () => {
    return axios.get(`${BASE_URL}/products`);
};
