
const Shape = require('../lib/shapes.js')

class Square extends Shape{
    render(){
        const dim = Math.min(this.width,this.height);
        return `<rect x="0" y="0" width="${dim}" height="${dim}" fill="${this.color}"/>`;
    }
}
module.exports =  Square;