import { addDecorator, addParameters, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { themes } from '@storybook/theming';
import storybookTheme from './storybookTheme';
import requireContext from 'require-context.macro';


addDecorator(withInfo);

addParameters({
    options: {
        theme: storybookTheme
    }
})

//const req = require.context('../src/', true, /\.stories\.js$/);
const req = requireContext('../src', true, /\.stories\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);