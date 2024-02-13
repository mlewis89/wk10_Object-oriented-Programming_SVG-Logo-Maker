const inquirer = require("inquirer");
var validateColorName = require("validate-color").validateHTMLColorName;
var validateColorHex = require("validate-color").validateHTMLColorHex;

const isValidText = async (input) => {
    if (!input) {
      return "text can't be blank";
    } else if (input.length > 3) {
      return "Too many charcters: no more than 3 allowed";
    } else {
      return true;
    }
  };

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
      type: "checkbox",
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
    const image = generateSVG(answers);
  });






const generateSVG = (answers) => {};
