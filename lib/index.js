import WebFont from 'webfontloader';
import Button from './elements/Button';
import TextInput from './elements/TextInput';

WebFont.load({
    google: {
        families: ['Open Sans:300,400,700'],
    },
});

export {
    Button,
    TextInput,
};
