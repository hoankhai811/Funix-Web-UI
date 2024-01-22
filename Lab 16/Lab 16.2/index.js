/* JS code here */
// import readline module
// const readline = require("readline");

// // create interface for input and output
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let language = "";
// let population = 0;
// let isIsland;

// // question user to enter name
// rl.question(
//   "How many neighbor countries does your country have?\n",
//   function (userInput) {
//     if (+userInput === 1) {
//       console.log("Only 1 border!");
//     } else if (+userInput > 1) {
//       console.log("More than 1 border");
//     } else {
//       console.log("No borders");
//     }

//     // Hãy nêu lý do chúng ta nên sử dụng toán tử === và chuyển đổi kiểu trong trường hợp này.
//     // - dùng strictly equality sẽ là best practice
//     // - trong trường hợp này không cần dùng === vì đã có chuyển đổi kiểu rồi khi người dùng nhập string thì function auto chuyển sang number

//     // close input stream
//     rl.close();
//   }
// );

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let language = "";
let population = 0;
let isIsland;

function askLanguage() {
  rl.question("Nhập ngôn ngữ: ", function (ans) {
    language = ans;
    askPopulation();
  });
}

function askPopulation() {
  rl.question("Nhập dân số: ", function (ans) {
    population = +ans; // Convert to a number
    askIslandStatus();
  });
}

function askIslandStatus() {
  rl.question("Có phải quốc đảo không (true/false): ", function (ans) {
    isIsland = ans.toLowerCase() === "true";
    processInputs();
  });
}

function processInputs() {
  console.log("Language:", language);
  console.log("Population:", population);
  console.log("Is Island:", isIsland);

  if (language.toLowerCase() === "english" || (population < 50 && !isIsland)) {
    console.log("You should live in Portugal :)");
  } else if (
    language.toLowerCase() !== "english" &&
    population < 50 &&
    isIsland
  ) {
    console.log("Portugal does not meet your criteria :(");
  } else {
    console.log("Trừ khi bạn sống ở Canada");
  }

  // Close the input stream
  rl.close();
}

// Start by asking for the language
askLanguage();
