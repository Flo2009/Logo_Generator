class Shapes{
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shapes{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
        
    }
    render(){
        let circleShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill='${this.shapeColor}' />
<text x="150" y="125" font-size="60" text-anchor="middle" fill='${this.textColor}' stroke="purple" stroke-width="3">${this.text}</text>
</svg>`
        return circleShape;
    }
}

class Triangle extends Shapes{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
        
    }
    render(){
        let triangleShape = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="95,60 180,220 10,220" fill='${this.shapeColor}' stroke='purple' stroke-width="3" />
  <text x="95" y="210" font-size="60" text-anchor="middle" fill='${this.textColor}'>${this.text}</text>.
</svg>`
        return triangleShape;
    }
    
}

class Square extends Shapes{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
    render(){
        let squareShape=`<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="30,50 180,50 180,200 30,200" fill='${this.shapeColor}' stroke="purple" stroke-width="3" />
  <text x="105" y="145" font-size="60" text-anchor="middle" fill='${this.textColor}'>${this.text}</text>
</svg>`
        return squareShape
    }
}

 module.exports = {Shapes, Circle, Triangle, Square};