//Shape class - defines the repeatable parameters for the circle, square and triangle classes
class Shape {
  constructor(color) {
    this.width = 200;
    this.height = 300;

    //size - dimension sets the largest dimention of the shapoe to ensure it fits within the image dimentions
    this.size = Math.min(this.width, this.height);
    this.color = color;
  }
  //function to set shape color
  setColor(col) {
    this.color = col;  
  };
}

//export the class for external use
module.exports = Shape;
