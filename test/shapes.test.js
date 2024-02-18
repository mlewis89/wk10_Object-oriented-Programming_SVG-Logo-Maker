const Shape = require('../lib/shape.js');
describe('Shape',() => {
    describe('Intantiate',() => {
        it('should be an instant of the shape class',()=>{
            const shape = new Shape();

            expect(shape).toBeInstanceOf(Shape);
        })
    })
})



