/* JS code here */
const neighbours = ["Sweden", "Vietnam", "Italy"];

neighbours.push("Utopia");

console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden";

console.log("neighbours :>> ", neighbours);
