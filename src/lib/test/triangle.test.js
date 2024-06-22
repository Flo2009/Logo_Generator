const Triangle = require('../shapes').Triangle;

// Test if the string returned is the correct svg string for a square
describe('Triangle', () => {
    
    describe('render', () => {
      it('should return a string with the color and text variables included', () => {
        const shape = new Triangle ("SVG", "blue", "green");
        const text =`<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="95,60 180,220 10,220" fill='green' stroke='purple' stroke-width="3" />
  <text x="95" y="210" font-size="60" text-anchor="middle" fill='blue'>SVG</text>.
</svg>`
        expect(shape.render()).toEqual(text);
      });
    });
  });