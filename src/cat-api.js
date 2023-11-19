import axios from "axios";

axios.defaults.baseURL = "https://api.thecatapi.com/v1";
axios.defaults.headers.common["x-api-key"] = "live_sFk9zT8l2vQd7Y8HEpVtQUNkiz5NdWfSDo35O2SJIILl76Dl3HE1XRDHR3aF8Vh0";

export function fetchBreeds() {
    return axios.get("/breeds").then((resp) => {
        return resp.data;
    });
};

export function fetchCatByBreed(breedId) {
    return axios.get(`/images/search?breed_ids=${breedId}`).then((resp) => {
        return resp.data[0];
    });  
};

