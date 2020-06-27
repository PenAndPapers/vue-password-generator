import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import VSkeleton from '@skeleton/VSkeleton'

storiesOf('Skeleton', module)
  .addDecorator(withKnobs)
  .add('VSkeleton', () => ({
    components: { VSkeleton },
    template: '<VSkeleton />',
    methods: { action: action('clicked') }
  }))
