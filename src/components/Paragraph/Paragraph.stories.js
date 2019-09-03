/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph from './index';

storiesOf('Paragraph', module)
  .add('Par default', () => (
    <Paragraph>
      Je suis une paragraphe et si j&apos;en avais une apprivoisée je serais très
      contente.
    </Paragraph>
  ))
  .add('Alignement', () => (
    <Paragraph align="right">
      Je suis une paragraphe avec un alignement à droite.
    </Paragraph>
  ))
  .add('Couleur', () => (
    <Paragraph color="blue">
      Je suis une paragraphe avec un alignement à droite.
    </Paragraph>
  ))
  .add('Avec class CSS', () => (
    <Paragraph className="pull-left">
      Je suis une paragraphe avec un alignement à droite.
    </Paragraph>
  ));
