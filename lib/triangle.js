const Shape = require("../lib/shapes.js");

class Triangle extends Shape {
  render() {
    return `<polygon points="0, ${this.size} ${this.size / 2}, 0 ${this.size}, ${this.size} 0, ${this.size}" fill="${this.color}"/>`;
  }
}
module.exports = Triangle;