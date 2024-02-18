const Square = require("../lib/square.js");
describe("Square", () => {
    describe('Intantiate',() => {
        it('should be an instant of the square class',()=>{
            const shape = new Square();

            expect(shape).toBeInstanceOf(Square);
        })
    })
    describe("render", () => {
    it("should be an SVG rectangle of the specified dimensions ", () => {
      const shape = new Square();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<rect x="0" y="0" width="200" height="200" fill="blue"/>'
      );
    });
  });
});
