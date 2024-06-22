const Circle = require('./src/lib/shapes').Circle;
const Square = require('./src/lib/shapes').Square;
const Triangle = require('./src/lib/shapes').Triangle;
const inquirer = require('inquirer');
const fs = require('fs');
const validateColor = require('validate-color').default;

// Question array for inquirer
const questions = ['Please Enter your Logo to be Displayed (only three characters?','Please Enter your Text Color?', 'Please choose your logo shape?',
    'Please Enter the Shape Color?'
    ];
// array of shapes for inquirer
const shapeArray = ['circle', 'triangle', 'square'];

let fileName = 'logo.svg';
//create the SVG file
function writeToFile(shape) {
    fs.writeFile(`./src/examples/${fileName}`, shape, (err) => {if (err) console.log(err)});
    console.log("Generated logo.svg");
}
//validate the color input for a valid HEX or Key Word entry
const colorValidation = async function(inputColor){
    
    if (!validateColor(inputColor)){
                 return 'Invalid Key Word or Hex'; 
             }
    return true;         
    
}

// initialzing app
function init() {
    inquirer
    .prompt([
          {
            type: 'input',
            message: questions[0],
            name: 'logo',
            validate: function(logo){
                if (logo.length != 3){
                    return 'Please enter only 3 characters!';
                }else{
                    return true;
                }
            }
          },
          {
            type: 'input',
            message: questions[1],
            name: 'textcolor',
            validate: colorValidation
          },
          {
            type: 'list',
            message: questions[2],
            name: 'shapechoice',
            choices: shapeArray,
          },
          {
            type: 'input',
            message: questions[3],
            name: 'shapecolor',
            validate: colorValidation
          },
          
         ])
    .then((response) => {
        if (response){
            let shape = '';
          switch(response.shapechoice){
            case 'circle':
                shape = new Circle(response.logo, response.textcolor, response.shapecolor).render();
                // console.log(shape);
                break;
            case 'triangle':
                shape = new Triangle(response.logo, response.textcolor, response.shapecolor).render();
                // console.log(shape);
                break;
            case 'square':
                shape = new Square(response.logo, response.textcolor, response.shapecolor).render(); 
                // console.log(shape);
                break;       
          }  
          
            writeToFile(shape);
        }else{
            console.log("Please give the necessary information to complete the README file!")
        }
    })
    .catch((err) => console.log(err));
}
// Function call to initialize app
init();
