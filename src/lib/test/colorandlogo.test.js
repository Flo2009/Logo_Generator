const Validation = require('../testClass');

describe('ColorLogoTest', () => {
    
    describe('colorValidation', () => {
      it('should return true for a correct hex code that is given', () => {
        
        const colorInput ='#fff'
        const colorResult = new Validation().colorValidation(colorInput);
        expect(colorResult).toEqual(true);
      });
    });
  });

  describe('ColorLogoTest', () => {
    
    describe('colorValidation', () => {
      it('should return false for a incorrect hex code that is given', () => {
        
        const colorInput ='#fffbhfs'
        const colorResult = new Validation().colorValidation(colorInput);
        expect(colorResult).toEqual(false);
      });
    });
  });

  describe('ColorLogoTest', () => {
    
    describe('colorValidation', () => {
      it('should return false for a incorrect key word that is given', () => {
        
        const colorInput ='fffbhfs'
        const colorResult = new Validation().colorValidation(colorInput);
        expect(colorResult).toEqual(false);
      });
    });
  });

  describe('ColorLogoTest', () => {
    
    describe('colorValidation', () => {
      it('should return true for a correct key word that is given', () => {
        
        const colorInput ='green'
        const colorResult = new Validation().colorValidation(colorInput);
        expect(colorResult).toEqual(true);
      });
    });
  });

  describe('ColorLogoTest', () => {
    
    describe('logoValidation', () => {
      it('should return true for a correct Logo that is given', () => {
        
        const logoInput ='SVG'
        const logoResult = new Validation().logoValidation(logoInput);
        expect(logoResult).toEqual(true);
      });
    });
  });

  describe('ColorLogoTest', () => {
    
    describe('logoValidation', () => {
      it('should return false for a incorrect Logo that is given', () => {
        
        const logoInput ='SVGGB'
        const logoResult = new Validation().logoValidation(logoInput);
        expect(logoResult).toEqual(false);
      });
    });
  });