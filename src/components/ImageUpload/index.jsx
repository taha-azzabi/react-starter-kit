import React from 'react';
import PropTypes from 'prop-types';
import StyledImageUpload from './StyledImageUpload';

class ImageUpload extends React.Component {
  handleChange = event => {
    console.log(event);
  };

  render() {
    const { className, accept } = this.props;
    return (
      <StyledImageUpload
        type="file"
        accept={accept.join()}
        className={className}
        onClick={this.handleChange}
      />
    );
  }
}

const acceptedType = [
  'image/*',
  'image/png',
  'image/jpg',
  'image/jpeg',
  '.png',
  '.jpg',
  '.jpeg',
];

ImageUpload.propTypes = {
  // eslint-disable-next-line consistent-return
  accept(props, propName, componentName) {
    const errors = [];
    props[propName].forEach(extension => {
      if (acceptedType.indexOf(extension) === -1) {
        errors.push(
          `=> Invalid prop ${propName} supplied to ${componentName} has a  ${extension} not valid`,
        );
      }
    });
    if (errors.length) {
      return new Error(errors.join('\n'));
    }
  },
  className: PropTypes.string,
};

ImageUpload.defaultProps = {
  accept: ['image/*'],
};

export default ImageUpload;
