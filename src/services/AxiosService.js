class AxiosService {

    post(url, data) {
        console.log("POST URL :", url);
        console.log("Employee :", data);
    }

}

export default new AxiosService();