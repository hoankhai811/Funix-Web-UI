/* JS code here */
const percentageOfWorld3 = (population) => (population / 7900000000) * 100;

function describePopulation(country, population) {
  return `${country} has ${population} people, which is about ${percentageOfWorld3(
    population
  )} of the world`;
}

const vietNam = describePopulation("VietNam", 78078500);
const thai = describePopulation("Thai", 101500436);
const lao = describePopulation("Lao", 50000000);

console.log("vietNam :>> ", vietNam);
console.log("thai :>> ", thai);
console.log("lao :>> ", lao);
