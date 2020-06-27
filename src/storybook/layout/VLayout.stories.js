import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import VLayout from '@layout/VLayout'

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .add('VLayout', () => ({
    components: { VLayout },
    template: '<VLayout />',
    methods: { action: action('clicked') }
  }))
