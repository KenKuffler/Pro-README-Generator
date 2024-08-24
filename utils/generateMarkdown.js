// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// ![Static Badge](https://img.shields.io/badge/:badgeContent)
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'GNU AGPLv3') {
    return '![License: GNU AGPLv3](https://img.shields.io/badge/license-AGPL%20v3-blue.svg)';
  } else if (license === 'GNU GPLv3') {
    return '![License: GNU GPLv3](https://img.shields.io/badge/license-GPLv3-blue.svg)';
  } else if (license === 'GNU LGPLv3') {
    return '![License: GNU LGPLv3](https://img.shields.io/badge/license-LGPL%20v3-blue.svg)';
  } else if (license === 'Mozilla') {
    return '![License: Mozilla](https://img.shields.io/badge/license-MPL%202.0-brightgreen.svg)';
  } else if (license === 'Boost') {
    return '![License: Boost](https://img.shields.io/badge/license-Boost%201.0-lightblue.svg)';
  } else if (license === 'Unlicense') {
    return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
  } else if (license === 'Apache') {
    return '![License: Apache](https://img.shields.io/badge/license-Apache%202.0-blue.svg)';
  } else {
    return '![License: None](https://img.shields.io/badge/license-No_License-lightgrey.svg)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)';
  } else if (license === 'GNU AGPLv3') {
    return '[GNU AGPLv3](https://www.gnu.org/licenses/agpl-3.0)';
  } else if (license === 'GNU GPLv3') {
    return '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'GNU LGPLv3') {
    return '[GNU LGPLv3](https://www.gnu.org/licenses/lgpl-3.0)';
  } else if (license === 'Mozilla') {
    return '[Mozilla](https://opensource.org/licenses/MPL-2.0)';
  } else if (license === 'Boost') {
    return '[Boost](https://www.boost.org/LICENSE_1_0.txt)';
  } else if (license === 'Unlicense') {
    return '[Unlicense](http://unlicense.org/)';
  } else if (license === 'Apache') {
    return '[Apache](https://opensource.org/licenses/Apache-2.0)';
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
## License
${renderLicenseBadge(license)}
This project is licensed under the ${renderLicenseLink(license)} license.
`;
  }
  return '';
}

//Function that returns license in table of contents
function renderLicenseTOC(license) {
  if (license !== 'None') {
    return `
* [License](#license)
`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const content = `
# ${data.title}

${renderLicenseBadge(license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.test}

## License
${renderLicenseSection(data.license)}

## Questions
GitHub: [${data.github}](https://github.com/${data.github})
Email: ${data.email}
`;
  return content;
}

export default generateMarkdown;
