import React from 'react';

// storybook addons
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number, color, select } from '@storybook/addon-knobs';

// import our components as a package
import * as VenaComponents from '../lib/index';

// import colors
import * as Colors from '../lib/styles/colors';

// initialize knobs for editing component props
const stories = storiesOf('Vena Components', module);
stories.addDecorator(withKnobs);

// basic button
stories.add('Button',
    withInfo('Shitty non-stateful notes')(() => (
        <VenaComponents.Button
            bgColor={color('Background Color', Colors.venaGreen1)}
            fontColor={color('Font Color', Colors.white1)}
            size={select('Size', ['small', 'medium', 'large'])}
        >
            {text('Label', 'Button')}
        </VenaComponents.Button>
    )),
);
