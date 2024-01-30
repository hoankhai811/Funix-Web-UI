/* JS code here */
const populations = [78078500, 101500436, 50000000, 787078500];
const percentages2 = [];
function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}

for (let index = 0; index < populations.length; index++) {
  percentages2[index] = percentageOfWorld1(populations[index]);
}

let index = 0;
const percentages3 = [];

while (index < populations.length) {
  percentages3[index] = percentageOfWorld1(populations[index]);
  index++;
}

console.log(percentages3);
