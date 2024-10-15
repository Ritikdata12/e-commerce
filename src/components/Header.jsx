import React, { useState, useEffect, useContext } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5'; 
import './Header.css';
import { MdAccountCircle } from "react-icons/md";

import { UserContext } from '../App';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);

  const { user, setUser } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);



  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    window.location.href = "/"; 
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
      setMenuOpen(false); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <main>
     <header className={scrollActive ? 'scrolled' : ''}>
  <a href="/" className="logo">
    <img
      src="data:image/png;base64,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"
      style={{height: "50px", width: "50px"}}
      alt="Logo"
    />
  </a>

  <div id="menu" onClick={toggleMenu}>
    {menuOpen ? <IoClose className="menu-icon" /> : <IoMenu className="menu-icon" />}
  </div>

  <nav className={`navbar ${menuOpen ? 'nav-toggle' : ''}`}>
    <ul>
      <li><a className="active" href="/">Home</a></li>

      <li><a href="/Contactus">Contact us</a></li>

      {user.email ? (
        <li className="user-menu">
          <a
            style={{ fontSize: '25px', cursor: 'pointer' }}
            onClick={toggleDropdown} 
          >
            <MdAccountCircle />
            {user.username} 
          </a>
          {dropdownOpen && ( 
            <ul className="dropdown">
              <li><a onClick={handleClick}>Profile</a></li>
              <li>
                <a onClick={handleLogout} style={{ cursor: 'pointer' }}>
                  Logout
                </a>
              </li>
            </ul>
          )}
        </li>
      ) : (
        <li><a href="/Register">Signup/Login</a></li>
      )}

    </ul>
  </nav>
</header>
    </main>
  );
};

export default Header;

