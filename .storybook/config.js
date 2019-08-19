// config.js

import { configure } from '@storybook/react'

function loadStories() {
  require('../src/components/Heading/Heading.story')
}

configure(loadStories, module)