import React from 'react';

const Home = () => {
  const containerStyle = {
    padding: '1.5rem',
  };

  const titleStyle = {
    color: 'white',
    fontSize: '2.3rem',
  };

  const paragraphStyle = {
    color: 'white',
    fontSize: '1.3rem',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Welcome to Math-Magicians!</h2>
      <span style={paragraphStyle}>
        &quot;Math magicians&quot; is a website for all fans of mathematics.
        <span> </span>
        It is a Single Page App (SPA) that allows users to:
        <ul>
          <li>Make simple calculations.</li>
          <li>Read a random math-related quote.</li>
        </ul>
        It was my first project using React. If you enjoyed it, check out my other projects on
        <span> </span>
        <a href="https://github.com/melaniesigrid">
          GitHub
        </a>
        .
      </span>
    </div>
  );
};

export default Home;
