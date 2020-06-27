import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import VModule from '@module/VModule'

storiesOf('Module', module)
  .addDecorator(withKnobs)
  .add('VModule', () => ({
    components: { VModule },
    template: '<VModule />',
    methods: { action: action('clicked') }
  }))
