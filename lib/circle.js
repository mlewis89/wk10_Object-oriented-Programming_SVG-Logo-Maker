const Shape = require('../lib/shapes.js')

class Circle extends Shape{
    render(){
        return `<circle 
        cx="${this.width/2}" cy="${this.height/2}" 
        r="${Math.min(this.width,this.height)/2}" 
        fill="${this.color}"/>`;
    }
}

module.exports =  Circle;