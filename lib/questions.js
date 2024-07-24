//Prompt user input in terminal

const questions = [
    {
      type: "input",
      message: "Enter text (max. 3 characters)",
      name: "text",
      validate: function(input) {
        if (input.length > 3) {
          return 'Input must be max. 3 characters';
        }
        return true;
      }
    },
    {
      type: "input",
      message: "Choose a text color",
      name: "textColor",
    },
    {
      type: "list",
      message: "Choose a shape",
      name: "shape",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      message: "Choose a shape color",
      name: "shapeColor",
    },
  ];

  module.exports = { questions };