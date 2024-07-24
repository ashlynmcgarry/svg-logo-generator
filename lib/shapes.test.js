//Importing data from shapes.js
const shapes = require("./shapes");

//Creating shapes test set
describe('Shapes', () => {

//testing circle generation
  describe('circle', () => {
      it('should render a blue svg circle element', () => { 
          const color = 'blue'; 
          const shape = new shapes.Circle(); 
          shape.setColor(color); 
          const expectedSVG = `<circle cx="150" cy="100" r="80" fill="${color}" />`; 
          const actualSVG = shape.render(); 
          expect(actualSVG).toBe(expectedSVG); 
      });
  });

//testing square generation
  describe('square', () => {
      it('should render a green svg square element', () => {
          const color = 'green';
          const shape = new shapes.Square();
          shape.setColor(color);
          const expectedSVG = `<rect x="10" y="10" width="200" height="200" fill="${color}" />`;
          const actualSVG = shape.render();
          expect(actualSVG).toBe(expectedSVG);
      });
  });

//testing triangle generation
  describe('triangle', () => {
      it('should render a purple svg triangle element', () => {
          const color = 'purple';
          const shape = new shapes.Triangle();
          shape.setColor(color);
          const expectedSVG = `<polygon points="150,10 10,190 290,190" fill="${color}" />`;
          const actualSVG = shape.render();
          expect(actualSVG).toBe(expectedSVG);
      });
  });
})