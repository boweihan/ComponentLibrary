import WebFont from 'webfontloader';
import Button from './elements/Button';
import Label from './elements/Label';

WebFont.load({
    google: {
        families: ['Open Sans:300,400,700'],
    },
});

module.exports = {
    Button,
    Label,
};
