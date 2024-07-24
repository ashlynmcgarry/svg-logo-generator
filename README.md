# SVG Logo Generator

## Description

![circle logo](https://github.com/user-attachments/assets/fd087b35-fbe3-4ea6-9aaa-c904548756c9)
![triangle logo](https://github.com/user-attachments/assets/7efe9200-7070-48c1-bb7a-785970b86881)
![square logo](https://github.com/user-attachments/assets/2891eb58-83c9-4f54-b040-64b7a014a7ba)

This SVG Logo Generator allows the user to enter letters, colors and choose a shape to have a simple logo generated for them, removing the need for a graphic designer. This generator utilises Node.js and prompts the user via the terminal to input max. three letters, choose a text color, choose a shape and choose a shape color. Colors can be chosen using either a color name (eg. 'blue', 'red', 'purple') or using a hexadecimal color code. Once the user has completed their inputs, a SVG file will be generated which can be opened within the browser. This project also utilises Jest to test the shapes functions and ensure they're working. Throughout this project I have learned and was able to utilise Node.js, the inquirer package and Jest to prompt and accept user input, and write to a .svg file. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Contributing](#contributing)
- [Test](#test)
- [Features](#features)
- [Questions](#questions)

## Installation

To utilise the SVG Logo Generator, clone the repository and open it in VS code. Open the file and terminal within VS code and install the required dependencies using 'npm i'.

## Usage

This generator can be used by entering 'node index.js' within VS Code's terminal and following the prompts. To test the shapes functions, enter 'npm test' into the terminal. For more usage details, see the usage video below. 

[Video Demo](https://drive.google.com/file/d/1YlJen63MWq380aIdOSO2i9rhbaSx99hS/view?usp=sharing).

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under [MIT License](https://opensource.org/licenses/MIT).

## Credits

Assistance for this project was provided by the AI Xpert Learning Assistant within Bootcamp Spot. This assistance included answering questions, explaining concepts, debugging code and providing code examples. Assistance was also provided via the class Instructor in Office Hours, who helped in providing direction and explaining concepts related to the project.

## Contributing

If you would like to contribute to the project and make it better, please feel free.

## Features

- Accept user input via the terminal
- Validate text input is max. 3 characters
- Allow color choice via either color name or hexadecimal code
- Generate a simple, SVG logo
- Execute test cases via the Jest suite

## Tests

To test the application, open the terminal within VS Code and type 'npm test'. This will run the pre-written Jest tests.

## Questions

For any additional questions, please reach out to me on GitHub [here](https://github.com/ashlynmcgarry) or via email at ashlynjanexx@gmail.com.
