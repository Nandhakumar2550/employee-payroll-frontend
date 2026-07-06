import axios from "axios";

const BASE_URL = "http://localhost:3001";

class AxiosService {

    get(url) {
        return axios.get(BASE_URL + url);
    }

    post(url, data) {
        return axios.post(BASE_URL + url, data);
    }
}

export default new AxiosService();