/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './index';

const HeadingWithColor = () => <Heading color="#1ea7fd"> Titre avec un couleur définie</Heading>;

const AllHeading = () => {
  const h = [1, 2, 3, 4, 5];
  return (
    <div>
      {h.map((level) => (
        <Heading key={level} level={level}>
            Titre H
          {' '}
          { level }
        </Heading>
      ))}
    </div>
  );
};


storiesOf('H1', module)
  .add('Tous', () => (<AllHeading />))
  .add('couleur', () => (
    <HeadingWithColor />
  ));
