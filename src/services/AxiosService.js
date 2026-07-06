import axios from "axios";

const BASE_URL = "http://localhost:3001";

class AxiosService {

    post(url, data) {

        return axios.post(BASE_URL + url, data);

    }

}

export default new AxiosService();