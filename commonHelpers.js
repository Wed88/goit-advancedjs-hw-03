import{a as i,i as d}from"./assets/vendor-96017409.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();i.defaults.baseURL="https://api.thecatapi.com/v1";i.defaults.headers.common["x-api-key"]="live_sFk9zT8l2vQd7Y8HEpVtQUNkiz5NdWfSDo35O2SJIILl76Dl3HE1XRDHR3aF8Vh0";function f(){return i.get("/breeds").then(r=>r.data)}function h(r){return i.get(`/images/search?breed_ids=${r}`).then(t=>t.data[0])}const l=document.querySelector(".breed-select"),u=document.querySelector(".cat-info"),s=document.querySelector(".loader"),m=document.querySelector(".myBox");l.addEventListener("change",p);m.setAttribute("hidden","hidden");function p(r){u.innerHTML="";const t=r.currentTarget.value;h(t).then(y).catch(o=>d.error({message:"Oops! Something went wrong! Try reloading the page!"})).finally(s.removeAttribute("hidden","hidden"))}f().then(r=>{l.insertAdjacentHTML("afterbegin",g(r))}).catch(r=>d.error({message:"Oops! Something went wrong! Try reloading the page!"}));function g(r){return s.setAttribute("hidden","hidden"),m.removeAttribute("hidden","hidden"),r.map(({id:t,name:o})=>`<option value="${t}">${o}</option>`).join("")}function y({url:r,breeds:t}=data){s.setAttribute("hidden","hidden");const o=`
    <img class="image" src="${r}" alt="${t[0].name}" />
    <div class="cat-info-text">
      <h2 class="cat-name">${t[0].name}</h2>
      <p class="cat-description">${t[0].description}</p>
      <p><span class="temperament">Temperament:</span> ${t[0].temperament}</p>
    </div>
  `;u.innerHTML=o}
//# sourceMappingURL=commonHelpers.js.map
