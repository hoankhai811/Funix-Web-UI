/* JS code here */
const myCountry = {
  country: "Vietnam",
  capital: "TPHCM",
  population: 79000000,
  language: "Vietnam",
  neighbours: ["Lao", "Thai", "Campuchia", "TrungQuoc"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} finnish-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland: function (neighbour) {
    return this.neighbours.includes(neighbour) ? true : false;
  },
};

myCountry.describe();
myCountry.isIsland = myCountry.checkIsland("Thai");

console.log(myCountry);
