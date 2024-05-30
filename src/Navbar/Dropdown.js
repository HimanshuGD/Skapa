import React from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover > ul {
    display: block;
  }
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 20px;
  background-color: rgba(255,255,255, 0.8);
  min-width: 160px;
  z-index: 1000;
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 5px;
  overflow: hidden;

  li {
    padding: 0.5rem;
    text-align: center;

    a {
      color: #fff;
      text-decoration: none;
      display: block;

      &:hover {
        background-color: orange;
      }
    }
  }
`;

const Dropdown = ({ title, items }) => {
    return (
        <DropdownContainer>
            <a href="#">{title}</a>
            <DropdownMenu>
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </DropdownMenu>
        </DropdownContainer>
    );
};

export default Dropdown;

