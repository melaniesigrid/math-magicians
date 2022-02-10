import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class CalcButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {buttonName, buttonClasses} = this.props;
    return (
      <button type="button" className={buttonClasses}>{buttonName}</button>
    );
  }
}

export default CalcButton;
