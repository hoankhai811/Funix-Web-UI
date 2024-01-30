/* JS code here */
const populations = [78078500, 101500436, 50000000, 787078500];

console.log(populations.length === 4);

const percentages = [];

populations.forEach((element) => {
  percentages.push(percentageOfWorld1(element));
});

function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}

console.log("percentages :>> ", percentages);
