// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if(license){
  return `![${license}](https://img.shields.io/badge/license-${license}-green)`
}
return ``
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `https://choosealicense.com/licenses/mit/`;
      break;
    case "Apache License 2.0":
      return `http://www.apache.org/licenses/LICENSE-2.0`;
      break;
    case "GNU General Public License v3.0":
      return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
      break;  
    default:
      return "" 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if(license) {
return `## License
${renderLicenseBadge(license)}

[Link to License Info](${renderLicenseLink(license)})
`}
return ''
}

function renderLicenseIndex (license){
if(license){
  return `- [License](#License)`
}
return ''
}



function generateMarkdown(answers) {
  return `#${answers.title}

## Description
${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${renderLicenseIndex(answers.license)}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributions
${answers.contributions}

## Test
${answers.tests}

## Questions
${answers.questions}

Github: [${answers.github}](https://github.com/${answers.github})
Email: ${answers.email}

${renderLicenseSection(answers.license)}
`;
}

module.exports = generateMarkdown;
