// TODO: Include packages needed for this application
const inquirer = require("inquirer");
//external module ^^
const fs = require("fs");
//^^ core module

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your Github Username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your e-mail address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a short description of your project..",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "", "Text message"],
  },
  {
    type: "input",
    message: "What is your Github URL?",
    name: "githubURL",
  },
  {
    type: "input",
    message: "Please provide us with the URL to your LinkedIn.",
    name: "linkedin",
  },
 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then();
}

// Function call to initialize app
init();
