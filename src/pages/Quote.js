import React from 'react';

const Quote = () => {
  const quoteStyle = {
    color: 'white',
    fontSize: '1.3rem',
  };

  return (
    <p style={quoteStyle}>
      "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding."
      <span>- William Paul Thurston</span>
    </p>
  )
}

export default Quote;