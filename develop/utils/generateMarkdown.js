// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `https://img.shields.io/badge/license-MIT-green`;
      break;
    case "Apache License 2.0":
      return `https://img.shields.io/badge/license-Apache--2.0-green`;
      break;
    case "GNU General Public License v3.0":
      return `https://img.shields.io/badge/license-GPL--3.0-green`;
      break;  
    default:
      return ""    
  }
}
//switch statement

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
  return `[{$license}](${renderLicenseBadge(license)})
 ## [${renderLicenseLink(license)}](${renderLicenseLink(license)})`
}



function generateMarkdown(answers) {
  return ` #${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application is covered by ${answers.license}
}

## Contributions
${answers.contributions}

## Test
${answers.tests}

## Questions
${answers.questions}

Github: [${answers.github}](https://github.com/${answers.username})
Email: ${answers.email}
`;
}

module.exports = generateMarkdown;
