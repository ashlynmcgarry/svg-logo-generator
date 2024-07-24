const inquirer = require("inquirer");
const { questions } = require("./lib/questions.js");
const { createSVG } = require("./lib/svg.js")
const fs = require("fs");

//Writing data to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Generated logo.svg");
      }
    });
  }

//Initialising the app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const logoData = createSVG(answers);
    writeToFile("logo.svg", logoData);
  });
}

init();
