# Eslint Config Rooknj

[![Build Status](https://travis-ci.org/Rooknj/eslint-config-rooknj.svg?branch=master)](https://travis-ci.org/Rooknj/eslint-config-rooknj)
[![npm version](https://badge.fury.io/js/%40rooknj%2Feslint-config.svg)](https://badge.fury.io/js/%40rooknj%2Feslint-config)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

My Personal Eslint Config for Typescript-React applications

## Installing

### Prerequisites

- NodeJS LTS installed on your system (Check by running `node -v`)

### Install with Yarn or NPM

yarn:

```
yarn add -D @rooknj/eslint-config
```
install peer dependencies:
```
yarn add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks
```

npm:

```
npm install --save-dev @rooknj/eslint-config
```
install peer dependencies:
```
npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks
```

## Developing

### Prerequisites

- NodeJS LTS installed on your system (Check by running `node -v`)
- Yarn (Check by running `yarn -v`)

### Deploying

Deployments happen automatically using Semantic-Release based off of conventional commit messages

## Commit Messages

Commit messages must follow [Conventional Commits](https://www.conventionalcommits.org)

Example Messages
- chore(docs): updated Readme
- refactor: renamed index.js
- fix(scope): fixed bug
- feat: Added new ability in code
- BREAKING CHANGE: Removed deprecated functions

CI will fail if you do not use the correct commit format. Local messages are linted using [Commitlint](https://commitlint.js.org/#/)

Commitizen support coming soon

## Versioning

We use [SemVer 2.0.0](https://semver.org/) for versioning. To see available versions, check out the [releases page](https://github.com/Rooknj/eslint-config-rooknj/releases)

### Code Style

Code style is managed by [Prettier](https://prettier.io/) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

All default prettier styles are enabled except for the overrides located in [.prettierrc.js](/.prettierrc.js)

Prettier is automatically ran on staged files every commit using [Husky](https://github.com/typicode/husky) and [Lint-Staged](https://github.com/okonet/lint-staged)

You can run prettier manually on every file through the command `yarn reformat` or you can set up prettier to run inside your IDE/Editor

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
