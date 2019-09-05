/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { mount } from 'enzyme';
import ImageUpload from './index';

describe('<ImageUpload/>', () => {
  let wrapped;
  it('Should only upload allowed extension via the browser ', () => {
    const accept = ['image/png', 'image/jpg'];
    wrapped = mount(<ImageUpload accept={accept} />);

    expect(
      wrapped
        .find('input')
        .render()
        .attr('accept')
        .split(','),
    ).toEqual(accept);
  });
  it('Does not allow image that exceed max file size', () => {
    wrapped = mount(<ImageUpload />);
  });
  it('Validate the image extension', () => {
    wrapped = mount(<ImageUpload />);
  });
  it('Show a loading spinner while the image upload', () => {
    wrapped = mount(<ImageUpload />);
  });
  it('Can have a default image', () => {
    wrapped = mount(<ImageUpload />);
  });
  it('Does not allow delete the default image', () => {
    wrapped = mount(<ImageUpload />);
  });
  it('Can delete the uploaded image', () => {
    wrapped = mount(<ImageUpload />);
  });
  afterEach(() => wrapped.unmount());
});
