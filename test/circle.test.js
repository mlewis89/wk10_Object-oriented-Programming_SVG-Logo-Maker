const Circle = require("../lib/circle");
describe("Circle", () => {
    describe('Intantiate',() => {
        it('should be an instant of the Circle class',()=>{
            const shape = new Circle();

            expect(shape).toBeInstanceOf(Circle);
        })
    })
    describe("render", () => {
    it("should be an SVG circle of the specified dimensions ", () => {
      const shape = new Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<circle cx="100" cy="150" r="100" fill="blue"/>'
      );
    });
  });
});
