import { getSelectedCurrency } from "./helpers.js";

const cardsBase = document.querySelectorAll(".cards-base .card");
const cardsTarget = document.querySelectorAll(".cards-target .card");
const trackExchangeRateAnchor = document.getElementById("convert");

// trackExchangeRateAnchor.disabled = true;

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
  card.addEventListener("change", toggleTrackAnchor);
});

cardsTarget.forEach((card) => {
  card.addEventListener("change", toggleTrackAnchor);
});

function toggleTrackAnchor() {
  const cardsBaseValue = cardsBase.value;
  const cardsTargetValue = cardsTarget.value;

  if (cardsBaseValue && cardsTargetValue) {
    trackExchangeRateAnchor.disabled = false;
  } else {
    trackExchangeRateAnchor.disabled = true;
  }
}
