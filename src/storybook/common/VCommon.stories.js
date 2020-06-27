import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import VCommon from '@common/VCommon'

storiesOf('Common', module)
  .addDecorator(withKnobs)
  .add('VCommon', () => ({
    components: { VCommon },
    template: '<VCommon />',
    methods: { action: action('clicked') }
  }))
