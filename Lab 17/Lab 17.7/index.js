/* JS code here */
// Lab 17.7.1. Đội nào chiến thắng? (phần 2)
function calcAvg(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  }
}

const avgDolphins1 = calcAvg(44, 23, 71);
const avgDolphins2 = calcAvg(85, 54, 41);
const avgKoalas1 = calcAvg(65, 54, 49);
const avgKoalas2 = calcAvg(23, 34, 27);

checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);

// Lab 17.7.2. Xây dựng Tip calculator (phần 2)

function calcTips(bill) {
  let tip;
  bill >= 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);
  return tip;
}

const bills = [125, 555, 44];
const total = [];

bills.forEach((item) => total.push(calcTips(item) + item));

console.log(total);
