import React from 'react'
import { storiesOf } from '@storybook/react'

const Button = ({ backgroundColor, label  }) => {
  return <button
    style={ {
      background: backgroundColor,
      color: "white"
    }}
  >
    { label }
  </button>
}

storiesOf('Button', module)
  .add('default', () => (
    <Button
      backgroundColor={'blue'}
      label={'Submit'}
    />
  ))
