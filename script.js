const convertValue = document.getElementById("convert-value");
const convertBtn = document.getElementById("convert-button");
const meterFeet = document.getElementById("meter-feet");
const literGallon = document.getElementById("liter-gallon");
const kgPound = document.getElementById("kg-pound");

function convertUnit(unit) {
  const meter = (unit * 3.281).toFixed(3);
  const feet = (unit / 3.281).toFixed(3);
  const liter = (unit * 0.264).toFixed(3);
  const gallon = (unit / 0.264).toFixed(3);
  const kg = (unit * 2.204).toFixed(3);
  const pound = (unit / 2.204).toFixed(3);
  meterFeet.textContent = `${unit} meters = ${meter} feet | ${unit} feet = ${feet} meters`;
  literGallon.textContent = `${unit} liters = ${liter} gallons | ${unit} gallons = ${gallon} liters`;
  kgPound.textContent = `${unit} kilos = ${kg} pounds | ${unit} pounds = ${pound} kilos`;
}

convertBtn.addEventListener("click", () => {
  convertUnit(convertValue.value);
});
