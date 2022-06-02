// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Whats the name of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project?',
    },
 
    {
        type:'input',
        name:'installation',
        message:'How does one install your application?',
    },
    {
        type:'input',
        name:'usage',
        message:'What are the benefits of project?',
    },
    {
        type:'list',
        name:'license',
        message:'Choose License',
        choices: ['MIT','Apache License 2.0','GNU General Public License v3.0', {name: 'None' , value: ''}],
    },
    {
        type:'input',
        name:'contributions',
        message:'Who contributed to this project?',
    },
    {
        type:'input',
        name:'tests',
        message:'Is there test included?',
    },
    {
        type:'input',
        name:'questions',
        message:'Who do I contact with issues?',
    },
    {
        type:'input',
        name:'github',
        message:'Github link?',
    },
    {
        type:'input',
        name:'email',
        message:'Input your email?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) => {
        if(err) {
            return console.log(err);
        }

        console.log("GREAT README!")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput))
    }
    )};

// Function call to initialize app
init();

