/* JS code here */
const myCountry = {
  country: "Vietnam",
  capital: "TPHCM",
  population: 79000000,
  language: "Vietnam",
  neighbours: ["Lao", "Thai", "Campuchia", "TrungQuoc"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} finnish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

console.log((myCountry.population += 20000000));
console.log((myCountry["population"] -= 50000000));
console.log(myCountry);
