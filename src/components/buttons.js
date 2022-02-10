import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class CalcButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { buttonName, buttonClasses, myFunc} = this.props;
    return (
      <button type="button" onClick={myFunc} className={buttonClasses}>{buttonName}</button>
    );
  }
}

export default CalcButton;
