const generateSVG = ({text,textColor,shape,shapeColor}) => {
const width = 200;
const height = 300;
const padding = 5;
let shapeStr = '';
console.log(shape);
switch(shape)
{
    case 'circle':
        shapeStr = `<circle cx="${width/2}" cy="${height/2}" r="${Math.min(width,height)/2}" fill="${shapeColor}"/>`;
          break;
    case 'triangle':
        shapeStr = `<polygon points="${padding}, ${height-padding} ${width/2}, ${padding} ${width-padding}, ${height-padding} ${padding}, ${height-padding}" fill="${shapeColor}"/>`;
    break;
    case 'square':
        shapeStr = `<rect x="${padding}" y="${padding}" width="${Math.min(width,height)-padding}" height="${Math.min(width,height)-padding}" fill="${shapeColor}"/>`
        break;        
}


const svgImage = 
`<?xml version="1.0" standalone="no"?>
<svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${shapeStr}
    <text x="${width/2}" y="${height/2}" text-anchor="middle" dominant-baseline="middle" stroke="${textColor}" fill="${textColor}" font-size="100">${text}</text>
</svg>`;

console.log(svgImage);
return svgImage
    
};

module.exports = generateSVG;