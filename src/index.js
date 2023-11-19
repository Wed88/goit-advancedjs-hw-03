import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const selectEl = document.querySelector(".breed-select");
const catInfoEl = document.querySelector(".cat-info");

selectEl.addEventListener("change", onSelectChange);

function onSelectChange(evt) {
  const breedId = evt.currentTarget.value;
  fetchCatByBreed(breedId)
    .then(createCatMarkup)
    .catch((err) => console.log(err));
};

fetchBreeds()
  .then(data => { selectEl.insertAdjacentHTML("afterbegin", createListCats(data)) })
  .catch((err) => console.log(err));

 

function createListCats(data) {
  return data.map(({ id, name }) => `<option value="${id}">${name}</option>`).join("");
};

function createCatMarkup({ url, breeds } = data) {
  const catCard = `
    <img src="${url}" alt="${breeds[0].name}" />
    <h2>${breeds[0].name}</h2>
    <p>${breeds[0].description}</p>
    <p>Temperament:${breeds[0].temperament}</p>
  `;

  catInfoEl.innerHTML = catCard;
};