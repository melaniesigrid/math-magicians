import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const About = () => {
  const titleStyle = {
    color: 'white',
    fontSize: '2.3rem',
  };

  const paragraphStyle = {
    color: 'white',
    fontSize: '1.3rem',
  };

  return (
    <div>
      <h2 style={titleStyle}>Welcome to Math-Magicians!</h2>
      <p style={paragraphStyle}>
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
      </p>
    </div>
  );
};

export default About;
