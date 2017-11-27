## React Component Library

Currently in development. Details to come

TODO:
- Guidelines for differentiating between elements, molecules and organisms
- Unit tests and tests before build, need to unit test any logic in the components (JEST)
- Better README for component development

NOTE:
With fonts, we are simply appending classnames. It is the responsibility of the hosting application
to ensure that the font libraries are loaded properly.

# How to develop a component
- Add components under lib/ (see Button.js for example)
- Following atomic design, components should be separated into elements/molecules/organisms depending on the scope.
- Colors should be specified in lib/styles/colors.js
- Fonts should be specified in lib/typography/fonts.js
- Components should be exported in lib/index.js

# Development Tools
- Install your editors eslint plugin to leverage the .eslintrc config
- npm install to install dependencies

# View components with Storybook
- npm run storybook

# Build the app to import into webclient
- npm run webpack