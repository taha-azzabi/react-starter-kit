/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/color';
import Button from './index';

const BasicButton = () => {
  return (
    <>
      <Button>Par défaut</Button>
      <Button disabled>Désactiver</Button>
      <Button type="submit" variant="success">
        Type Submit
      </Button>
    </>
  );
};

const ButtonWithLoading = () => <Button loading>Je suis un bouton</Button>;

const ButtonWithCustomColor = () => <Button color="#ffc107">Bouton couleur</Button>;

storiesOf('Bouton', module)
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .add('Par défaut', () => <BasicButton />)
  .add('Chargement', () => <ButtonWithLoading />)
  .add('Avec couleur personnalisé', () => <ButtonWithCustomColor />);
