import React from 'react';

const Quote = () => {
  const quoteStyle = {
    color: 'white',
    fontSize: '1.8rem',
    width: '70vw',
    textAlign: 'center',
  };

  return (
    <p style={quoteStyle}>
      &quot;Mathematics is not about numbers,
      equations, computations, or algorithms: it is about understanding.&quot;
      <span>- William Paul Thurston</span>
    </p>
  );
};

export default Quote;
