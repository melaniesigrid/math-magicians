import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '../hooks/hooks';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const isNotMobile = useMediaQuery('(min-width: 750px)');

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
    container: isNotMobile => ({
      left: 0,
      textTransform: 'lowercase',
      fontSize: isNotMobile ? '3rem' : '1.5rem',
    })
  };

  const listStyle = {
    container: isNotMobile => ({
      listStyleType: 'none',
      display: 'flex',
      flexDirection: isNotMobile ? 'row' : 'column',
      fontSize: isNotMobile ? '1.3rem' : '1.5rem',
    })
  };

  const itemStyle = {
    padding: '1rem',
    fontWeight: 'bold',
    zIndex: '3',
  };

  const menuButton = {
    fontSize: '2rem',
  }

  const overlayStyle = {
    position: 'fixed',
    opacity: '1',
    transition: '200ms ease-in-out',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: 2,
    backgroundColor: '#1a1a1a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const handleToggle = () => {
    setModalOpen(prev => !prev)
  }

  return (
    <header style={headerStyle}>
      <div className="overlayContainer">
        {modalOpen
          ? (
            <div style={overlayStyle}>
              <ul style={listStyle.container(isNotMobile)}>
                <li style={itemStyle}><NavLink to="/Home/" rel="noopener noreferrer" onClick={handleToggle}>Home</NavLink></li>
                <li style={itemStyle}><NavLink to="/" rel="noopener noreferrer" onClick={handleToggle}>Calculator</NavLink></li>
                <li style={itemStyle}><NavLink to="/Quote/" rel="noopener noreferrer" onClick={handleToggle}>Quote</NavLink></li>
              </ul>
            </div>
          )
            : (
              <nav style={navStyle}>
                <h1 style={titleStyle.container(isNotMobile)} className='Title'>
                  <NavLink to="/" rel="noopener noreferrer">Math-Magicians</NavLink>
                </h1>
                <div className="MenuContainer">
                  {isNotMobile
                    ? (
                        <ul style={listStyle.container(isNotMobile)}>
                          <li style={itemStyle}><NavLink to="/Home/" rel="noopener noreferrer">Home</NavLink></li>
                          <li style={itemStyle}><NavLink to="/" rel="noopener noreferrer">Calculator</NavLink></li>
                          <li style={itemStyle}><NavLink to="/Quote/" rel="noopener noreferrer">Quote</NavLink></li>
                        </ul>
                    )
                      : (
                        <button style={menuButton} onClick={handleToggle} className="MenuButton">
                          ≡
                        </button>
                      )
                  }
                </div>
              </nav>
            )
        }
      </div>
    </header>
  );
};

export default Header;
