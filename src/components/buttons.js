import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class CalcButton extends React.Component {
  constructor(props) {
    super(props);
    const { buttonName, buttonClasses } = this.props;
  }

  render() {
    return (
      <button type="button" className={this.props.buttonClasses}>{ this.props.buttonName }</button>
    );
  }
}

export default CalcButton;