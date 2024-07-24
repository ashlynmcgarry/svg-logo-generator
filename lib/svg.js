//Importing shape classes from shapes.js
const { Circle, Triangle, Square } = require("./shapes.js");

//Defining shape based on input answer
function createSVG(answers) {
    let shape;
    switch (answers.shape) {
      case "Circle":
        shape = new Circle();
        break;
      case "Triangle":
        shape = new Triangle();
        break;
      case "Square":
        shape = new Square();
        break;
    }
  
//Setting shape color
    shape.setColor(answers.shapeColor);
  
//Returning shape SVG code
    const shapeSVG = shape.render();
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeSVG}
    <text x="150" y="100" fill="${answers.textColor}" text-anchor="middle" dominant-baseline="middle" font-size="40">${answers.text}</text>
    </svg>`;
  }

  module.exports = { createSVG };