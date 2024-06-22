const Square = require('../shapes').Square;

// Test if the string returned is the correct svg string for a square
describe('Square', () => {
    
    describe('render', () => {
      it('should return a string with the color and text variables included', () => {
        const shape = new Square ("SVG", "blue", "green");
        const text = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="30,50 180,50 180,200 30,200" fill='green' stroke="purple" stroke-width="3" />
  <text x="105" y="145" font-size="60" text-anchor="middle" fill='blue'>SVG</text>
</svg>`
        expect(shape.render()).toEqual(text);
      });
    });
  });