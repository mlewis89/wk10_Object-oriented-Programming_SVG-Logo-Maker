const Shape = require('../lib/Comment.js');
describe('Shape',() => {
    describe('Intantiate',() => {
        it('should be an instant of the shape class',()=>{
            const shape = new Shape();

            expect(shape).toBeInstanceOf(Shape);
        })
    })
})