const Shape = require('../lib/shapes.js')

class Circle extends Shape{
    render(){
        return `<circle cx="${this.width/2}" cy="${this.height/2}" r="${this.size/2}" fill="${this.color}"/>`;
    }
}

module.exports =  Circle;