const Circle = require('../shapes').Circle;

// Test if the string returned is the correct svg string for a circle
describe('Circle', () => {
    
    describe('render', () => {
      it('should return a string with the color and text variables included', () => {
        const shape = new Circle ("SVG", "blue", "green");
        const text = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill='green' />
<text x="150" y="125" font-size="60" text-anchor="middle" fill='blue' stroke="purple" stroke-width="3">SVG</text>
</svg>`
        expect(shape.render()).toEqual(text);
      });
    });
  });