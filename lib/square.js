
//include the base shape class
const Shape = require('./shape.js')

//create 'Square' as a child of the 'Shape' class
class Square extends Shape{
    render(){
        return `<rect x="0" y="0" width="${this.size}" height="${this.size}" fill="${this.color}"/>`;
    }
}

//export the class for external use
module.exports =  Square;