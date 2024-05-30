import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const NavbarContainer = styled.header`
  position: fixed;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

const Navbar = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  a {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
  }
`;

const Links = styled.ul`
  display: flex;
  list-style: none;

  li a {
    color: #fff;
    font-size: 1rem;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 1px solid transparent;
    border-radius:1cm;
    transition: all 0.3s ease;
  }

  li a:hover {
    color: #4A90E2;
    background-color: white;
    border-color: #4A90E2;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

const ActionButton = styled(Link)`
  background-color: orange;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  transition: scale 0.2s ease;
  text-decoration: none;

  &:hover {
    scale: 1.05;
    color: #fff;
  }

  &:active {
    scale: 0.95;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

const ToggleButton = styled.div`
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
`;

const DropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  left: 10px;
  top: 60px;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(15px);
  border-radius: 10px;
  overflow: hidden;
  transition: height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: ${({ isOpen }) => (isOpen ? '240px' : '0')};

  li {
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    color: black;
    font-size: 1rem;
    text-decoration: none;
  }

  .action_btn {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1100px) {
    display: none;
  }
`;

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 993);

  const handleToggle = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 993);
    if (window.innerWidth >= 993) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { label: 'Sub Item 1', href: '#sub-item-1' },
    { label: 'Sub Item 2', href: '#sub-item-2' },
  ];

  return (
    <NavbarContainer>
      <Navbar>
        <div className="left-section">
          <Links>
            <li><Link to="/">Home</Link></li>
            <li><Dropdown title="Your Space" items={menuItems} /></li>
            <li><Dropdown title="Explore" items={menuItems} /></li>
            <li><a href="#about">About</a></li>
          </Links>
        </div>
        <ToggleButton onClick={handleToggle}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </ToggleButton>
        <div className="center-section">
          <Logo>
            <Link to="/" className="action_btn">Skapa</Link>
          </Logo>
        </div>
        <div className="right-section">
          <Links>``
            <li><Link to="/login" className="action_btn">Sign In</Link></li>
            <li><Link to="/register" className="action_btn" style={{paddingRight:'0.6cm'}}>Sign Up</Link></li>
          </Links>
        </div>
      </Navbar>
      <DropdownMenu isOpen={isOpen}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#your-space">Your Space</a></li>
        <li><a href="#explore">Explore</a></li>
        <li><Link to="/login" className="action_btn">Sign In</Link></li>
        <li><Link to="/register" className="action_btn">Sign Up</Link></li>
        <li><a href="#about">About</a></li>
      </DropdownMenu>
    </NavbarContainer>
  );
};

export default NavbarComponent;


