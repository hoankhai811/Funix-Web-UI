/* JS code here */
function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}

const vietNam = percentageOfWorld1(78078500);
const thai = percentageOfWorld1(101500436);
const lao = percentageOfWorld1(50000000);

console.log("vietNam :>> ", vietNam);
console.log("thai :>> ", thai);
console.log("lao :>> ", lao);

const percentageOfWorld2 = function (population) {
  return (population / 7900000000) * 100;
};

const y = percentageOfWorld2(787078500);
const duc = percentageOfWorld2(1091500436);
const anh = percentageOfWorld2(500000000);

console.log("y :>> ", y);
console.log("duc :>> ", duc);
console.log("anh :>> ", anh);
