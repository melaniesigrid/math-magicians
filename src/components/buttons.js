import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class CalcButton extends React.Component {
  render() {
    const { buttonName, buttonClasses, myFunc } = this.props;
    return (
      <button type="button" onClick={myFunc} className={buttonClasses}>{buttonName}</button>
    );
  }
}

CalcButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonClasses: PropTypes.string.isRequired,
  myFunc: PropTypes.func.isRequired,
};

export default CalcButton;
