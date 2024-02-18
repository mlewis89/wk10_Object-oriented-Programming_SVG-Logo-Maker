//include external packages
const fs = require('fs');

//include local files
const Square = require("./square.js");
const Triangle = require("./triangle.js");
const Circle = require("./circle.js");

const generateSVG = ({ text, textColor, shape, shapeColor }) => {
  console.info('Generating Image.....')
  
  //generate shape based on the user response
  switch (shape) {
    case "circle":      shape = new Circle();
                        break;
    case "triangle":    shape = new Triangle();
                        break;
    case "square":      shape = new Square();
                        break;
  }
  //Det Shape color
  shape.setColor(shapeColor);

  //SVG image code
  const svgImage = 
`<?xml version="1.0" standalone="no"?>
<svg width="${shape.width}" height="${shape.height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
${shape.render()}
<text x="${shape.width / 2}" y="${shape.height / 2}" text-anchor="middle" dominant-baseline="middle" stroke="${textColor}" fill="${textColor}" font-size="100">${text}</text>
</svg>`;

//Set file name and location
const fileName = 'logo.svg';
const filePath = `./${fileName}`;
//write image data to file
fs.writeFile(filePath, svgImage, (WriteErr) =>
  WriteErr
    ? console.error(WriteErr)
    : console.log(
      `Generated logo.svg`
    )
)
};

//export function for use in userInput.js
module.exports = generateSVG;
