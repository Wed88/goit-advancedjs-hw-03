import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const selectEl = document.querySelector(".breed-select");
const catInfoEl = document.querySelector(".cat-info");
const loaderEl = document.querySelector(".loader");
const myBoxEl = document.querySelector(".myBox")

selectEl.addEventListener("change", onSelectChange);

myBoxEl.setAttribute("hidden", "hidden");

function onSelectChange(evt) {
  catInfoEl.innerHTML = '';

  const breedId = evt.currentTarget.value;

  fetchCatByBreed(breedId)
    .then(createCatMarkup)
    .catch(error => iziToast.error({ message: "Oops! Something went wrong! Try reloading the page!" }))
    .finally(loaderEl.removeAttribute("hidden", "hidden"));
};

fetchBreeds()
  .then(data => { selectEl.insertAdjacentHTML("afterbegin", createListCats(data)) })
  .catch(error => iziToast.error({ message: "Oops! Something went wrong! Try reloading the page!" }))
  .finally(loaderEl.setAttribute("hidden", "hidden"));

 

function createListCats(data) {
  loaderEl.setAttribute("hidden", "hidden")
  myBoxEl.removeAttribute("hidden", "hidden")
  return data.map(({ id, name }) => `<option value="${id}">${name}</option>`).join("");
};

function createCatMarkup({ url, breeds } = data) {
  loaderEl.setAttribute("hidden", "hidden");
    
  const catCard = `
    <img class="image" src="${url}" alt="${breeds[0].name}" />
    <div class="cat-info-text">
      <h2 class="cat-name">${breeds[0].name}</h2>
      <p class="cat-description">${breeds[0].description}</p>
      <p><span class="temperament">Temperament:</span> ${breeds[0].temperament}</p>
    </div>
  `;

  catInfoEl.innerHTML = catCard;  
};