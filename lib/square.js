
const Shape = require('../lib/shapes.js')

class Square extends Shape{
    render(){
        return `<rect x="0" y="0" width="${this.size}" height="${this.size}" fill="${this.color}"/>`;
    }
}
module.exports =  Square;