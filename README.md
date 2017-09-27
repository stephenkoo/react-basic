# React Base
A simple, opinionated React skeleton.

## Quick Start

You must have Node version ≥6 and [Yarn](https://yarnpkg.com/en/docs/install) to run this app. Follow the [instructions here](#having-problems-starting) to install them.

```
nvm use
yarn
yarn start
```

Open http://localhost:3000/ to see the app.

### Having Problems Starting?

If you’re having problems starting the app, try installing the required tools:

Install [nvm](https://github.com/creationix/nvm#install-script) and install the Node version required by this app’s `.nvmrc`
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash
nvm install
```

Install [Homebrew](https://brew.sh/) and Yarn
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install yarn
```

Try [starting the app again](#quick-start).
If this still fails, follow the instructions in your CLI.

## Running Tests, Deployment, and Other Tasks

| Other common commands   | What they do                                          |
| ----------------------- | ----------------------------------------------------- |
| `yarn build`            | Builds a minified bundle for production               |
| `yarn build:css`        | Compiles CSS files (done automatically on yarn start) |
| `yarn watch:css`        | Compiles CSS files and watches for changes            |
| `yarn test`             | Runs lint and unit tests                              |
| `yarn test:lint`        | Runs lint tests                                       |
| `yarn test:lint:js`     | Runs JavaScript lint tests                            |
| `yarn test:lint:styles` | Runs SCSS lint tests                                  |
| `yarn test:unit`        | Runs unit tests                                       |
| `yarn lint`             | Formats entire project using Prettier and stylelint   |
| `yarn lint:prettier`    | Formats js, jsx, json, and scss with Prettier         |
| `yarn lint:styles`      | Formats scss with stylelint                           |
| `yarn eject`            | [Ejects Create React App](https://github.com/facebookincubator/create-react-app#converting-to-a-custom-setup) (do this only if you absolutely must)   |

### What’s Inside

- [Prettier](https://prettier.io/) - Automatically formats your js, jsx, json and scss before you commit
- [SCSS (Sass)](http://sass-lang.com/) - CSS preprocessor
- [Stylelint](https://stylelint.io/) - Lints your SCSS
- [Redux](http://redux.js.org/)
- [React Router](https://reacttraining.com/react-router/)
- [Create React App](https://github.com/facebookincubator/create-react-app) goodies like
    - [webpack](https://webpack.js.org/)
    - [Babel with ES6 and Facebook extensions](http://babeljs.io/)
    - [Autoprefixer](https://github.com/postcss/autoprefixer)
    - [ESLint](http://eslint.org/)
    - [Jest](http://facebook.github.io/jest)

### Directory Structure

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

- **`/src/components` - [Presentational components\**](http://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components)**
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

#### Style folder

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

### Coding Rules

1. Containers must always access state through selectors
1. Containers must not have any logic except dispatching actions
1. View logic should be extracted from containers into presentational components
1. Business logic must be in `src/store` action handlers (thunks), selectors and reducers
1. Services must be stateless

*From [Tal Kol’s Redux Workflow article](https://hackernoon.com/redux-step-by-step-a-simple-and-robust-workflow-for-real-life-apps-1fdf7df46092).*

### Planned Improvements

- Implement [reselect](https://github.com/reactjs/reselect)
- Implement [normalizr](https://github.com/paularmstrong/normalizr)
- Implement [Immutable.js](https://facebook.github.io/immutable-js/)
- Implement [enzyme](https://github.com/airbnb/enzyme)
- Implement [Flow](https://flow.org/)
- Implement [lodash](https://lodash.com) or [Underscore.js](http://underscorejs.org/)
- Implement [Storybook](https://storybook.js.org/) or [Styleguidist](https://react-styleguidist.js.org/)
- Create and add custom SCSS style utilities as a package dependency

## License
[MIT](https://opensource.org/licenses/MIT)


