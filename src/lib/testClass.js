const validateColor = require('validate-color').default;
class ColorLogoTest{};

ColorLogoTest.prototype.colorValidation = function(inputColor){
    
    if (!validateColor(inputColor)){
                 return false; 
             }
    return true;         
    
}

ColorLogoTest.prototype.logoValidation = function(logo){
    if (logo.length != 3){
        return false;
    }else{
        return true;
    }
}

module.exports = ColorLogoTest;