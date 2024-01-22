/* JS code here */
// Lab 16.6.1. Đội nào chiến thắng? (phần 1)
function calcAvg(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

let dolphins = calcAvg(96, 108, 89);
let dolphinsBonus1 = calcAvg(97, 112, 101);
let dolphinsBonus2 = calcAvg(97, 112, 101);
let koalas = calcAvg(88, 91, 110);
let koalasBonus1 = calcAvg(109, 95, 123);
let koalasBonus2 = calcAvg(109, 95, 106);

if (dolphins > koalas) {
  console.log("dolphins win");
} else if (dolphins < koalas) {
  console.log("koalas win");
} else {
  console.log("draw");
}

if (dolphinsBonus1 >= 100 && dolphinsBonus1 > koalasBonus1) {
  console.log("dolphins win bonus 1");
} else if (koalasBonus1 >= 100 && dolphinsBonus1 < koalasBonus1) {
  console.log("koalas win bonus 1");
} else {
  console.log("draw bonus 1");
}

if (
  dolphinsBonus2 >= 100 &&
  koalasBonus2 >= 100 &&
  koalasBonus2 === dolphinsBonus2
) {
  console.log("draw bonus 2");
} else if (koalasBonus1 >= 100 && dolphinsBonus1 < koalasBonus1) {
  console.log("koalas win bonus 2");
} else if (dolphinsBonus1 >= 100 && dolphinsBonus1 > koalasBonus1) {
  console.log("dolphins win bonus 2");
}

function calcTips(bill) {
  let tip;
  bill >= 50 && bill <= 300 ? (tip = bill * 0.2) : (tip = bill * 0.15);
  console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total value ${
      bill + tip
    }`
  );
}

calcTips(275);
calcTips(40);
calcTips(430);
