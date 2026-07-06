import axios from "axios";

const BASE_URL="http://localhost:8080";

class AxiosService{

    get(url){
        return axios.get(BASE_URL+url);
    }

    post(url,data){
        return axios.post(BASE_URL+url,data);
    }

    put(url,data){
        return axios.put(BASE_URL+url,data);
    }

    delete(url){
        return axios.delete(BASE_URL+url);
    }

}

export default new AxiosService();