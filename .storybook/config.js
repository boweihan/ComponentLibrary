import { configure } from '@storybook/react'; // eslint-disable-line

function loadStories() {
    require('../stories/index.js');
}

configure(loadStories, module);
