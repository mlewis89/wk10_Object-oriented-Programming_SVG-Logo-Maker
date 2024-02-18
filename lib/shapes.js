class Shape {
  constructor(color) {
    this.width = 200;
    this.height = 300;
    this.padding = 5;
    this.size = Math.min(this.width, this.height);

    //this.shapeStr = "";
    this.color = color;
  }
  setColor(col) {
    this.color = col;  
  };
}

module.exports = Shape;
