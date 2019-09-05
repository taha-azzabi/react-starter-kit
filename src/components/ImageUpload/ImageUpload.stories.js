/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { storiesOf } from '@storybook/react';
import ImageUpload from './index';

storiesOf('Image Upload', module)
  .add('Par default', () => <ImageUpload />)
  .add('Upload only specific type', () => (
    <ImageUpload accept={['image/png', 'image/jpg']} />
  ));
