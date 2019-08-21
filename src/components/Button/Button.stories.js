/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/color';
import Button from './index';

console.log(theme);
const BasicButton = () => {
  return (
    <>
      <Button>Par défaut</Button>
      <Button disabled>Désactiver</Button>
      <Button type="submit">Type Submit</Button>
    </>
  );
};

storiesOf('Bouton', module)
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .add('Par défaut', () => <BasicButton />);
