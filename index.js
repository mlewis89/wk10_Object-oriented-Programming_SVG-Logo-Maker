const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            //text,  
            type: 'input',
            name: 'text',
            message: 'Please enter upto three characters',
        },
        {
            //,  
            type: 'input',
            name: 'textColor',
            message: 'what colour should the text be? (colour keyword or hexadecimal)',
        },
        {
            //,  
            type: 'checkbox',
            name: 'shape',
            message: 'What shap would yopu like the3 backgroud to be',
            choices: ['circle', 'triangle','square'],
        },
        {
            //,  
            type: 'input',
            name: 'shapeColor',
            message: 'What Colour should the shape be? (colour keyword or hexadecimal)',
        },
    ])
    .then((answers) => {
        const image = generateSVG(answers);
    });

const generateSVG = (answers)=> {

};