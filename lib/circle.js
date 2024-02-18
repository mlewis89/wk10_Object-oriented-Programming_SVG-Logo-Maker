//include the base shape class
const Shape = require('./shape.js')

//create 'Circle' as a child of the 'Shape' class
class Circle extends Shape{
    render(){
        return `<circle cx="${this.width/2}" cy="${this.height/2}" r="${this.size/2}" fill="${this.color}"/>`;
    }
}

//export the class for external use
module.exports =  Circle;