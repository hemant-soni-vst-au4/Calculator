import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { buttonName } = props;
  return (
    <div>
      {buttonName}
    </div>
  );
}
Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};
