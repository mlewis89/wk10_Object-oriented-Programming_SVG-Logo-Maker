const Shape = require("../lib/shapes.js");

class Triangle extends Shape {
  render() {
    const dim = Math.min(this.width,this.height);
    return `<polygon points="0, ${dim} ${dim / 2}, 0 ${dim}, ${dim} 0, ${dim}" fill="${this.color}"/>`;
  }
}
module.exports = Triangle;