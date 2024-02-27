export const getSelectedCurrency = () => {
  let el = document.querySelector(".card.active");

  console.log("el: ", el);

  return el.textContent;
};
