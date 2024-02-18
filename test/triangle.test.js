const Triangle = require("../lib/triangle.js");
describe("Triangle", () => {
    describe('Intantiate',() => {
        it('should be an instant of the triangle class',()=>{
            const shape = new Triangle();

            expect(shape).toBeInstanceOf(Triangle);
        })
    })
    describe("render", () => {
    it("should be an SVG polygon of the specified dimensions ", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="0, 200 100, 0 200, 200 0, 200" fill="blue"/>'
      );
    });
  });
});
