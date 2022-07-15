# Quin Assignment App

This project was bootstrapped with CRA ([Create React App](https://github.com/facebook/create-react-app)).

## How to run App

After cloning the app from GitHub please following steps to run the app:

Note: latest updates is available on `dev` branch.

### `yarn install`

For installing all dependencies.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npx husky-init`

Note: Before starting programming run this script once to create a husky configuration on your device. After that pull from the `dev` branch to get the update for the husky config.

## Available Scripts

In the project directory, you can run:

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn prepare`

Install Husky after generated husky config in the app.

### `yarn check-types`

Checks all TypeScript errors in the app.

### `yarn check-format`

Check all files for having the same code style in our app (excluding the ones in .prettierignore).

### `yarn check-lint`

Asks ESLint to check for any linting warnings/errors on an .ts, .tsx files. This is for identifying problematic patterns found in JavaScript code (excluding the ones in .eslintignore).

### `yarn format`

Tells prettier to automatically re-write all of our files with proper formatting.

## Git Usage

In the app, I use the Git flow convention. Also, I have a pattern convention for branches that are:

Branch Pattern: `[Type]/[Module]_[Detail]`

Example: `feature/slider_implement-slider-component`

### Type

types in our branch names can be the following list:

- feature
- enhance
- fix
- hotfix
- refactor
- cleanup

### Module

Changes related to each module should be committed on a separate branch with the module name.

### Detail

After specify type and module in our branch we should write a brief description about what we want to do. It's important to keep our description short because we don't want to have a branch with a long name.

## Tech Choices

In this section, I introduce the installed tools and give a brief explanation for each of them.

### ESLint, Prettier & Husky

ESLint and Prettier have been used to have common rules for writing code in the same way, as well as to have the same coding style and avoid problems in typescript codes. Also, to check and ensure the correctness of the codes in terms of style and typescript problems, before committing and pushing the codes on the Github, Husky will ensure the correctness of the codes and then we can commit the code, otherwise, the problem should be checked. and fix it and commit after that.

### Styled Components

Using styled-components for the following reasons:

- Access to the props inside of each styled component for some situations when we have dynamic style.
- Prevention conditional checking for styles in JSX code.
- Defining theme and access to that easy in our styled component.
- Writing less code in our JSX.
- Good support for CSS and Object syntax.
- Good documentation and community.
- SSR (Server Side Rendering) Support.
- Supporting TypeScript and having good utilities.
- Etc.

### React Query

React Query is a powerful data-fetching library that has a lot of features for handling our API requests (result, errors, loading, fetching and etc.). Also, React Query provided more than 20 great features for all kinds of situations that may happen to us. In the following list, I mentioned some of them.

- SSR (Server Side Rendering) Support.
- Cache request and allow to us to access the data on our app.
- Offline support.
- Multiple hooks for a variety of functions.

### Axios

By using Axios we can make and configure requests efficiently. for knowing more features please check this [link](https://github.com/axios/axios#features)

### Things I would like to do if I had more time

#### Wite test with jest and react-testing-library for some situation like:

- Check initial render for each component
- Check required props for eaach component
- Check prop types for each components
- Simulate EventHandler like (onChange, onClick, etc.)
- Check async data with waitFor or wait functions for some situations
- Create snapshot test
- Check state before change and check them after change by EventHandlers
- Check initial states when app start
- Check all functionality for filter option
- ETC...

#### Implemet better UI/UX for user on desktop and mobile devices

#### Wrtie variable name, function name with the better way.

#### Using better pattern for some component like compound pattern for select component and so on.
