class Shape {
  constructor(color) {
    this.width = 200;
    this.height = 300;
    this.padding = 5;

    //this.shapeStr = "";
    this.color = color;
  }
  setColor(col) {
    this.color = col;  
  };
}

module.exports = Shape;
