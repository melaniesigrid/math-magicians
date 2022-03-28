import React from 'react';
import { NavLink } from 'react-router-dom';

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
          <NavLink to="/" rel="noopener noreferrer">Math-Magicians</NavLink>
        </h1>
        <ul style={listStyle}>
          <li style={itemStyle}><NavLink to="/Home/" rel="noopener noreferrer">Home</NavLink></li>
          <li style={itemStyle}><NavLink to="/math-magicians/" rel="noopener noreferrer">Calculator</NavLink></li>
          <li style={itemStyle}><NavLink to="/Quote/" rel="noopener noreferrer">Quote</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
