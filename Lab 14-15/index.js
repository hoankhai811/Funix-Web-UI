// Lab 14.1

var country = "Viet Nam";
var continent = "Asia";
var population = 130;

console.log("country :>> ", country);
console.log("continent :>> ", continent);
console.log("population :>> ", population);

// Lab 15.1
// 1. Khai báo một biến có tên 'isIsland', và đặt giá trị của biến. Biến phải chứa một giá trị Boolean (nếu quốc gia là một hòn đảo thì giá trị biến này là true, ngược lại sẽ là false). Khai báo thêm một biến 'language' nhưng chưa cần gán cho nó bất kỳ giá trị nào.
var isIsland = true;
var language;

// 2. In các kiểu dữ liệu của biến 'isIsland', 'population', 'country' và 'language' ra console.
console.log("typeof isIsland :>> ", typeof isIsland);
console.log("typeof language :>> ", typeof language);
console.log("typeof country :>> ", typeof country);
console.log("typeof population :>> ", typeof population);

// Lab 15.2
// 1. Đặt giá trị của 'language' thành ngôn ngữ được nói ở nơi bạn sống (một số quốc gia có nhiều ngôn ngữ, nhưng chỉ cần chọn một). Ví dụ như 'English', 'Vietnamese'.
language = "English";

// 2. Hãy nghĩ xem những biến nào có thể sử dụng const (những giá trị nào không bao giờ thay đổi, và những giá trị nào có thể thay đổi?). Sau đó, chuyển các biến mà bạn đã nghĩ ra thành biến khai báo bằng const.
const usrName = "HoanCK";
const address = "TP.HCM";

// 3. Giờ hãy thử thay đổi giá trị một trong các biến trên và quan sát xem điều gì sẽ xảy ra.
// usrName = 90;
//         ^

// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (D:\FUNIX\WebUI\Lab 14 - JS\index.js:24:9)
//     at Module._compile (node:internal/modules/cjs/loader:1376:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
//     at Module.load (node:internal/modules/cjs/loader:1207:32)
//     at Module._load (node:internal/modules/cjs/loader:1023:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
//     at node:internal/main/run_main_module:28:49

// Lab 15.3
// 1. Nếu quốc gia của bạn bị chia cắt làm hai miền, mỗi miền gồm một nửa dân số của quốc gia, vậy sẽ có bao nhiêu người sống ở mỗi miền? Hãy sử dụng giá trị từ biến population để hoàn thành yêu cầu này, in ra màn hình console giá trị của population chia 2.
console.log("population / 2 :>> ", population / 2);

// 2. Tăng giá trị của biến population thêm 1 và in kết quả ra console.
console.log("population + 1 :>> ", population + 1);

// 3. Phần Lan có dân số là 6 triệu người. Kiểm tra xem quốc gia bạn có nhiều dân hơn so với Phần Lan không? Bạn cần in ra console xem giá trị population có lớn hơn 6 triệu không?
console.log("population > 6 :>> ", population > 6);

// 4. Dân số trung bình của một quốc gia là 33 triệu người. Kiểm tra xem quốc gia bạn có ít dân hơn so với các mức dân số trung bình không?
console.log("population < 33 :>> ", population < 33);

// 5. Dựa trên các biến bạn đã tạo, hãy tạo một biến mới là  'description', trong đó có chứa một string có định dạng sau: '<country> and its <population> million people speak <language>'. Bạn cần thay thế các giá trị trong <> thành các biến tương ứng.
const description =
  "<country> and its <population> million people speak <language>";
console.log(
  `${country} and its ${population} million people speak ${language}`
);

// Lab 15.4
// 1. Tạo lại biến 'description' từ lần gán trước, lần này hãy sử dụng cú pháp template literal.
const description1 = `${country} and its ${population} million people speak ${language}`;

// Lab 15.5
// 1. Nếu dân số của nước bạn có hơn 33 triệu người, hãy in string sau ra console: '<country>'s population is above average'. Nếu không hãy in ra một string như thế này: '<country>'s population is < 33 - population > million below average' . Ví dụ dân số của Hà Lan là 18 triệu người, bạn sẽ cần in ra "Nederland's population is 15 million below average" (15 là lấy 33 - 18).
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is  ${33 - population} million below average`
  );
}

// Lab 15.6.1
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

function calcBMI(height, weight) {
  return weight / (height * height);
}
let johnBMI = calcBMI(johnHeight, johnWeight);
let markBMI = calcBMI(markHeight, markWeight);

let isHigher = johnBMI > markBMI;

console.log("markBMI :>> ", markBMI);
console.log("johnBMI :>> ", johnBMI);
console.log("isHigher :>> ", isHigher);

if (!isHigher) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's ${markBMI}!`);
}
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

johnBMI = calcBMI(johnHeight, johnWeight);
markBMI = calcBMI(markHeight, markWeight);

isHigher = johnBMI > markBMI;

console.log("markBMI1 :>> ", markBMI);
console.log("johnBMI1 :>> ", johnBMI);
console.log("isHigher1 :>> ", isHigher);

// 15.6.2
if (!isHigher) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's ${markBMI}!`);
}
