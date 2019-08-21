/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';

const BasicButton = () => {
  return (
    <>
      <Button>Par défaut</Button>
      <Button disabled>Désactiver</Button>
      <Button type="submit">Type Submit</Button>
    </>
  );
};

storiesOf('Bouton', module).add('Par défaut', () => <BasicButton />);
