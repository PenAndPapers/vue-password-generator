import { configure } from '@storybook/vue'

configure(require.context('../src/storybook', true, /\.stories\.js$/), module)