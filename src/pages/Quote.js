import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Quote = () => {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const apiUrl = 'https://random-math-quote-api.herokuapp.com/';
  const quoteStyle = {
    color: 'white',
    fontSize: '1.8rem',
    width: '70vw',
    textAlign: 'center',
  };

  const getQuote = () => {
    Axios.get(apiUrl)
      .then((response) => {
        const myObject = response.data;
        const myQuote = myObject.quote;
        const myAuthor = myObject.author;
        setQuote(myQuote);
        setAuthor(myAuthor);
      });
  }

  useEffect(() => getQuote(), []);

  return (
    <p style={quoteStyle}>
      &quot;
      {quote}
      &quot;
      <span>
        {`- ${author}`}
      </span>
    </p>
  );
};

export default Quote;
