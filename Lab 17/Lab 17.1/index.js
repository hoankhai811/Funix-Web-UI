/* JS code here */
function describeCountry(capitalCity, population, country) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const country1 = describeCountry("Hanoi", "33", "VietNam");
const country2 = describeCountry("TPHCM", "43", "VietNam");
const country3 = describeCountry("Hue", "22", "VietNam");

console.log("country1 :>> ", country1);
console.log("country2 :>> ", country2);
console.log("country3 :>> ", country3);
