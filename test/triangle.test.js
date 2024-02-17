const Shape = require('../lib/triangle.js');
describe('Triangle',() => {
    describe('render',() => {
        it('should be an SVG polygon of the specified dimensions ',()=>{
            const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
})
