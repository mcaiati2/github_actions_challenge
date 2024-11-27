# Git Actions Challenge

Welcome to the Git Actions Challenge repository! This project is crafted to help you learn and practice using GitHub Actions for continuous integration and deployment.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact] (#contact)
- [License](#license)

## Introduction

This repository is part of a bootcamp homework assignment aimed at mastering GitHub Actions. GitHub Actions is a robust tool for automating workflows directly within your GitHub repository.

Here is a [link](https://github-actions-challenge-vsfx.onrender.com) to the deployed application.

## Getting Started

To begin with this project, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/git-actions-challenge.git
```

Navigate to the project directory:

```bash
cd git-actions-challenge
```

## Usage

This section will walk you through setting up and using GitHub Actions in this project.

### Setting Up GitHub Actions

1. Create a `.github/workflows` directory at the root of your repository.
2. Add a YAML file (e.g., `ci.yml`) to define your workflow.

Example workflow file:

```yaml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'
    - run: npm install
    - run: npm test
```

### Running the Workflow

Push your changes to GitHub, and the workflow will automatically execute based on the defined triggers (e.g., `push` or `pull_request`).

## Contributing

Special thanks to my tutor, Erik Hoversten, for helping with the functionality of the app.

## Contact

Contact me on [GitHub](https://github.com/mcaiati2)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
