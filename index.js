// import "./style.css";

const cardsBase = document.querySelectorAll(".cards-base .card");
const cardsTarget = document.querySelectorAll(".cards-target .card");

// const trackExchangeRateAnchor = document.getElementById(
//   "trackExchangeRateAnchor"
// );

const trackExchangeRateAnchor = document.getElementById("convert");

trackExchangeRateAnchor.disabled = true;

cardsBase.forEach((card) => {
  card.addEventListener("click", (event) => {
    console.log("currency ", event.target.dataset.currency);
    document.querySelector(".cards .card.active")?.classList.remove("active");
    event.currentTarget.classList.add("active");
  });
});

cardsTarget.forEach((card) => {
  card.addEventListener("click", (event) => {
    console.log("currency ", event.target.dataset.currency);
    document.querySelector(".cards .card.active")?.classList.remove("active");
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

  console.log("cardsBaseValue ", cardsBaseValue);
  console.log("cardsTargetValue ", cardsTargetValue);

  if (cardsBaseValue && cardsTargetValue) {
    console.log("true");
    trackExchangeRateAnchor.disabled = false;
  } else {
    console.log("false");
    trackExchangeRateAnchor.disabled = true;
  }
}
