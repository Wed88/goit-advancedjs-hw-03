import axios from "axios";

axios.defaults.baseURL = "https://api.thecatapi.com/v1";
axios.defaults.headers.common["x-api-key"] = "live_sFk9zT8l2vQd7Y8HEpVtQUNkiz5NdWfSDo35O2SJIILl76Dl3HE1XRDHR3aF8Vh0";

const selectEl = document.querySelector(".breed-select");

console.log(selectEl);

function fetchBreeds() {
    return axios.get("/breeds").then((resp) => {
        // console.log(resp.data);
        return resp.data;
    });
  // return axios.get('/breeds')
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error(response.status);
  //     }
  //     return response.json();
  //   })
    // .then(data => {
    //   console.log(data.id)
    // // Data handling
    // })
    // .catch(error => {
    // // Error handling
    // });
  // .then(response => {
  //   // handle success
  //   console.log(response);
  //   console.log(response.data[0].id);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
};
fetchBreeds().then(data => {selectEl.insertAdjacentHTML("afterbegin", createListCats(data))})

function createListCats(data) {
  return data.map(({ id, name }) => `<option value="${id}">${name}</option>`).join("");
}