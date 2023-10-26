const tallInput = document.querySelector("#tallInput");
const ageInput = document.querySelector("#ageInput");
const weightInput = document.querySelector("#weightInput");

const woman = document.body.querySelector("#woman");

const man = document.body.querySelector("#man");

const grundumsatzKcal = document.body.querySelector("#grundumsatzKcal");
const grundumsatzKJ = document.body.querySelector("#grundumsatzKJ");
const gesamtumsatzKcal = document.body.querySelector("#gesamtumsatzKcal");
const gesamtumsatzKJ = document.body.querySelector("#gesamtumsatzKJ");
const actionSelect = document.body.querySelector("#actionSelect");

const kalorienRechner = () => {
  if (woman.checked === true && man.checked === false) {
    const grundumsatz =
      65.51 +
      9.6 * weightInput.value +
      1.8 * tallInput.value -
      4.7 * ageInput.value;
    const gesamtumsatz = grundumsatz * actionSelect.value;
    grundumsatzKcal.textContent = grundumsatz.toFixed(2);
    grundumsatzKJ.textContent = (grundumsatz * 4.184).toFixed(2);
    gesamtumsatzKcal.textContent = gesamtumsatz.toFixed(2);
    gesamtumsatzKJ.textContent = (gesamtumsatz * 4.184).toFixed(2);
  } else if (woman.checked === false && man.checked === true) {
    const grundumsatz =
      66.47 +
      13.7 * weightInput.value +
      5 * tallInput.value -
      6.8 * ageInput.value;
    const gesamtumsatz = grundumsatz * actionSelect.value;
    grundumsatzKcal.textContent = grundumsatz.toFixed(2);
    grundumsatzKJ.textContent = (grundumsatz * 4.184).toFixed(2);
    gesamtumsatzKcal.textContent = gesamtumsatz.toFixed(2);
    gesamtumsatzKJ.textContent = (gesamtumsatz * 4.184).toFixed(2);
  }
};
