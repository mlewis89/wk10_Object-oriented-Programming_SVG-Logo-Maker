//include the base shape class
const Shape = require("./shape.js");

//create 'Triangle' as a child of the 'Shape' class
class Triangle extends Shape {
  render() {
    return `<polygon points="0, ${this.size} ${this.size / 2}, 0 ${this.size}, ${this.size} 0, ${this.size}" fill="${this.color}"/>`;
  }
}

//export the class for external use
module.exports = Triangle;