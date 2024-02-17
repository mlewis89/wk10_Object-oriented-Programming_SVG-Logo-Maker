const Shape = require('../lib/circle');
describe('Circle',() => {
    describe('render',() => {
        it('should be an SVG polygon of the specified dimensions ',()=>{
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
})
