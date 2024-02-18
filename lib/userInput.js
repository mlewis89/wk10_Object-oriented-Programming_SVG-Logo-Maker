
//include external packages
const inquirer = require("inquirer");

const validateColorName = require("validate-color").validateHTMLColorName;
const validateColorHex = require("validate-color").validateHTMLColorHex;

//include local files
const generateSvg = require('./generateSVG');

//conditional function to determine response is not empty and limit text characters to 3
const isValidText = async (input) => {
    if (!input) {
      return "text can't be blank";
    } else if (input.length > 3) {
      return "Too many charcters: no more than 3 allowed";
    } else {
      return true;
    }
  };

  //conditional function to determine if entered color is either a valid CSS colour key word or a HEX Value
  const isValidColour = async (strColor) => {
    if (!strColor) {
      return "colour can't be blank";
    } else if(validateColorName(strColor)) {
      return true;
    } else if(validateColorHex(strColor)){
      return true;
    }else{
        return "please enter a valid color";
    }
  };

// Function to get user inputs and then call SVG generator function
const processUserInputs = () => {

    inquirer
    .prompt([
      {
        //text input
        type: "input",
        name: "text",
        message: "Please enter upto three characters",
        validate: isValidText
      },
      {
        //Text Colour input
        type: "input",
        name: "textColor",
        message:
          "what colour should the text be? (colour keyword or hexadecimal)",
        validate: isValidColour
      },
      {
        //Shape selector
        type: "list",
        name: "shape",
        message: "What shap would yopu like the3 backgroud to be",
        choices: ["circle", "triangle", "square"],
      },
      {
        //Shape Colour Input
        type: "input",
        name: "shapeColor",
        message:
          "What Colour should the shape be? (colour keyword or hexadecimal)",
          validate: isValidColour
      },
    ])
    .then((answers) => {
      generateSvg(answers);
    });
    
};

//export function for use in index.js
module.exports = processUserInputs;