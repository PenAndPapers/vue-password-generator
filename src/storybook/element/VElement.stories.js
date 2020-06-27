import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import VElement from '@element/VElement'

storiesOf('Element', module)
  .addDecorator(withKnobs)
  .add('VElement', () => ({
    components: { VElement },
    template: '<VElement />',
    methods: { action: action('clicked') }
  }))
