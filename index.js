import { getSelectedCurrency } from "./helpers.js";

const cardsBase = document.querySelectorAll(".cards-base .card");
const cardsTarget = document.querySelectorAll(".cards-target .card");
const trackExchangeRate = document.getElementById("convert");

trackExchangeRate.disabled = true;

cardsBase.forEach((card) => {
  card.addEventListener("click", (event) => {
    console.log("currency ", event.target.dataset.currency);
    // remove the previous active currency
    document
      .querySelector(".cards-base .card.active")
      ?.classList.remove("active");
    // mark the new currency as active
    event.currentTarget.classList.add("active");
  });
});

cardsTarget.forEach((card) => {
  card.addEventListener("click", (event) => {
    console.log("currency ", event.target.dataset.currency);
    // remove the previous active currency
    document
      .querySelector(".cards-target .card.active")
      ?.classList.remove("active");
    // mark the new currency as active
    event.currentTarget.classList.add("active");
  });
});

cardsBase.forEach((card) => {
  card.addEventListener("change", toggleTrackButton);
});

cardsTarget.forEach((card) => {
  card.addEventListener("change", toggleTrackButton);
});

function toggleTrackButton() {
  const baseActive = document.querySelector(".cards-base .card.active");
  const targetActive = document.querySelector(".cards-target .card.active");

  // results.html?base=EUR&target=USD
  if (baseActive && targetActive) {
    trackExchangeRate.disabled = false;

    // trackExchangeRate.setAttribute(
    //   "href",
    //   `results.html?base=${baseValue}&target=${targetValue}`
    // );

    trackExchangeRate.setAttribute("href", `results.html?base=EUR&target=USD`);
  } else {
    trackExchangeRate.disabled = true;
  }
}
