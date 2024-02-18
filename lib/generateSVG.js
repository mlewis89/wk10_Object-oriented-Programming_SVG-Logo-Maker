const fs = require('fs');

const Square = require("./square.js");
const Triangle = require("./triangle.js");
const Circle = require("./circle.js");

const generateSVG = ({ text, textColor, shape, shapeColor }) => {
  console.info('Generating Image.....')
  switch (shape) {
    case "circle":      shape = new Circle();
                        break;
    case "triangle":    shape = new Triangle();
                        break;
    case "square":      shape = new Square();
                        break;
  }

  shape.setColor(shapeColor);
  const svgImage = 
`<?xml version="1.0" standalone="no"?>
<svg width="${shape.width}" height="${shape.height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
${shape.render()}
<text x="${shape.width / 2}" y="${shape.height / 2}" text-anchor="middle" dominant-baseline="middle" stroke="${textColor}" fill="${textColor}" font-size="100">${text}</text>
</svg>`;

const fileName = 'image.svg';
const filePath = `./${fileName}`;
fs.writeFile(filePath, svgImage, (WriteErr) =>
  WriteErr
    ? console.error(WriteErr)
    : console.log(
      `${fileName} created in the ${filePath}`
    )
)
};

module.exports = generateSVG;
