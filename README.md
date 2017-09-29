# CRAB: Create React App Boost [![Build Status](https://travis-ci.org/stephenkoo/crab.svg?branch=master)](https://travis-ci.org/stephenkoo/crab) [![Coverage Status](https://coveralls.io/repos/github/stephenkoo/crab/badge.svg?branch=master)](https://coveralls.io/github/stephenkoo/crab?branch=master) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
> A simple, opinionated React starter boilerplate

CRAB adds [commonly used extras](#whats-inside) like React Router and Redux to [Create React App]((https://github.com/facebookincubator/create-react-app) so you can start building apps.

## Quick Start

You need the latest Node version and [Yarn](https://yarnpkg.com/en/docs/install) to run this app. [Here’s how to install them](#having-problems-starting).

```
git clone https://github.com/stephenkoo/crab.git
cd crab
yarn
yarn start
```
Open http://localhost:3000/ to see the app.

You can just run `yarn start` to start the app after the first time.

### Having Problems Starting?

Having problems starting the app? Install the right Node version and Yarn then try again:
```
nvm install
nvm use
brew install yarn
```

*If this doesn’t work, install [nvm](https://github.com/creationix/nvm#install-script) and [Homebrew](https://brew.sh/) and repeat the instructions.*

## Running Tests

`yarn test` runs all lint and unit tests.
[Jest](http://facebook.github.io/jest) is used for unit tests, [ESLint](http://eslint.org/) for JavaScript linting, and [Stylelint](https://stylelint.io/) for SCSS linting.

| Other test scripts      |                            |
| ----------------------- | -------------------------- |
| `yarn test:lint`        | Runs lint tests            |
| `yarn test:lint:js`     | Runs JavaScript lint tests |
| `yarn test:lint:styles` | Runs SCSS lint tests       |
| `yarn test:unit`        | Runs unit tests            |

Useful testing info can be found in [Create React App’s User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests).

## Deployment

`yarn build` builds a minified production build

More deployment info can be found in [Create React App’s User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment).

## Other Tasks

| Scripts                 |                                                       |
| ----------------------- | ----------------------------------------------------- |
| `yarn build:css`        | Compiles CSS files (done automatically on yarn start) |
| `yarn watch:css`        | Compiles CSS files and watches for changes            |
| `yarn lint`             | Formats entire project using Prettier and stylelint   |
| `yarn lint:prettier`    | Formats js, jsx, json, and scss with Prettier         |
| `yarn lint:styles`      | Formats scss with stylelint                           |
| `yarn eject`            | [Ejects Create React App](https://github.com/facebookincubator/create-react-app#converting-to-a-custom-setup) (do this only if you absolutely must)   |

## What’s Inside

- [Prettier](https://prettier.io/) - Automatically formats your js, jsx, json and scss before you commit
- [SCSS (Sass)](http://sass-lang.com/)
- [Stylelint](https://stylelint.io/)
- [Redux](http://redux.js.org/)
- [React Router](https://reacttraining.com/react-router/)
- [Create React App](https://github.com/facebookincubator/create-react-app) goodies like:
    - [webpack](https://webpack.js.org/)
    - [Babel with ES6 and Facebook extensions](http://babeljs.io/)
    - [Autoprefixer](https://github.com/postcss/autoprefixer)
    - [ESLint](http://eslint.org/)
    - [Jest](http://facebook.github.io/jest)

## Directory Structure

Follow this folder structure:

```
this-app
└── src
    └── components
    │   └── {ComponentName}
    │       └── index.js
    │       └── index.test.js
    │       └── styles.scss
    └── containers
    │   └── {ContainerName}
    │       └── index.js
    │       └── index.test.js
    └── services
    └── store
    │   └── reducers.js
    │   └── {domain-name}
    │       └── reducer.js
    │       └── actions.js
    └── styles
    └── App.scss
    └── App.js
    └── App.test.js
    └── index.js
    └── registerServiceWorker.js
```

*Structure based on [Tal Kol’s Redux Workflow article](https://hackernoon.com/redux-step-by-step-a-simple-and-robust-workflow-for-real-life-apps-1fdf7df46092) and [the acommpanying example repo](https://github.com/wix/react-dataflow-example).*

- **`/src/components` - [Presentational components](http://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components)**
  - Concerned with how things look (markup, styles)
  - Written as [functional components](https://javascriptplayground.com/blog/2017/03/functional-stateless-components-react/)
  - [Has no dependencies](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) on the rest of the app
  - Examples: *Page*, *Sidebar*, *Story*, *UserInfo*, *List*
- **`/src/containers` - [Container components](http://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components)**
  - Concerned with how things work (no styles, rarely contains DOM markup other than wrapping divs)
  - Provides data and behaviour to presentational or other container components
  - Written as [functional components](https://javascriptplayground.com/blog/2017/03/functional-stateless-components-react/)
  - Usually [made using higher order components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) like Redux’s `connect()`
  - Examples: *UserPage*, *FollowersSidebar*, *StoryContainer*, *FollowedUserList*
- **`/src/services` - Abstraction façades for external API (backend servers)**
- **`/src/store` - Redux-specific code, including all business-logic**
  - **`/src/store/{domain-name}/reducers.js`** - Reducers as default exports and selectors as named exports
  - **`/src/store/{domain-name}/actions.js`** - Action creators and action handlers (thunks or sagas)
- **`/src/styles` - Generic (non-component-specific) styles**

### Style folder

In `/src/styles`, follow this folder structure:

```
this-app
└── src
    └── styles
        └── {style-category}
        │   └── _{partial-name}.scss
        │   └── _{partial-name}.scss
        └── settings
        │   └── _breakpoints.scss
        │   └── _colors.scss
        │   └── _fonts.scss
        │   └── _grid.scss
        │   └── _reset.scss
        │   └── _z-index.scss
        └── utils
        │   └── _layout.scss
        │   └── _media.scss
        │   └── _text-truncate.scss
        │   └── _units.scss
        └── vendor
        │   └── _bootstrap.scss
        │   └── _bootstrap-customizations.scss
        │   └── _bootstrap-overrides.scss
        └── _{partial-name}.scss
        └── _{partial-name}.scss
        └── main.scss
```
*Structure based on [John W. Long’s article](http://thesassway.com/beginner/how-to-structure-a-sass-project).*

- **`_{partial-name}.scss`**  - All stylesheets (except `main.scss`) should be partials
- **`_main.scss`**  - Imports all partials in `src/styles`. Contains no styles. This is the only stylesheet in `src/styles` that generates a CSS file.
- **`{style-category}`** - Create subfolders to group related partials together
- **`{/styles/settings}`** - Contains app-wide Sass variables. It should not output CSS.
- **`{/styles/utils}`** - Contains Sass mixins and functions. It should not output CSS here, but can output CSS in Sass stylesheets where the utils are used.
- **`{/styles/vendors}`** - Imports third-party stylesheets and contains modifications to those third-party stylesheets

### Good coding principles

1. Containers must always access state through selectors
1. Containers must not have any logic except dispatching actions
1. View logic should be extracted from containers into presentational components
1. Business logic must be in `src/store` action handlers (thunks), selectors and reducers
1. Services must be stateless

*From [Tal Kol’s Redux Workflow article](https://hackernoon.com/redux-step-by-step-a-simple-and-robust-workflow-for-real-life-apps-1fdf7df46092).*

## Planned Improvements

- Implement [reselect](https://github.com/reactjs/reselect)
- Implement [normalizr](https://github.com/paularmstrong/normalizr)
- Implement [Immutable.js](https://facebook.github.io/immutable-js/)
- Implement [enzyme](https://github.com/airbnb/enzyme)
- Implement [Flow](https://flow.org/)
- Implement [lodash](https://lodash.com) or [Underscore.js](http://underscorejs.org/)
- Implement [Storybook](https://storybook.js.org/) or [Styleguidist](https://react-styleguidist.js.org/)
- Create and add custom SCSS style utilities as a package dependency

## License

[MIT](https://opensource.org/licenses/MIT) © [Stephen Koo](https://github.com/stephenkoo)
