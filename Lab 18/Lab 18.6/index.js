/* JS code here */
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

listOfNeighbours.forEach((neighbors) => {
  if (neighbors.length >= 2) {
    for (let index = 1; index < neighbors.length; index++) {
      console.log(neighbors[index]);
    }
  }
});
