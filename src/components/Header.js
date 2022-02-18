import React from 'react';

const Header = () => {
  const headerStyle = {
    width: '100vw',
    position: 'fixed',
    top: 0,
    padding: '1rem 0',
    color: 'rgba(146, 77, 168, 1)',
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  };

  const titleStyle = {
    left: 0,
    textTransform: 'lowercase',
    fontSize: '3rem',
  };

  const listStyle = {
    listStyleType: 'none',
    display: 'flex',
    fontSize: '1.3rem',
  };

  const itemStyle = {
    padding: '1rem',
    fontWeight: 'bold',
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <h1 style={titleStyle}>
          <a href="/math-magicians/" rel="noopener noreferrer">Math-Magicians</a>
        </h1>
        <ul style={listStyle}>
          <li style={itemStyle}><a href="/About/" rel="noopener noreferrer">About</a></li>
          <li style={itemStyle}><a href="/math-magicians/" rel="noopener noreferrer">Calculator</a></li>
          <li style={itemStyle}><a href="/Quote/" rel="noopener noreferrer">Quote</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
