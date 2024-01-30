let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

john.bmi = john.calcBMI();
mark.bmi = mark.calcBMI();

isHigher = john.bmi > mark.bmi;

if (!isHigher) {
  console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`);
} else {
  console.log(`John's BMI (${john.bmi}) is higher than Mark's ${mark.bmi}!`);
}

//Lab 18.8.2. Cải thiện Tip calculator
function calcTips(bill) {
  let tip;
  bill >= 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);
  return tip;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const total = [];

bills.forEach((item) => total.push(calcTips(item) + item));

console.log(total);

function calcAverage(arr) {
  return arr.reduce((acc, cur) => (acc += cur), 0) / arr.length;
}

const totalAverage = calcAverage(total);

console.log(totalAverage);
