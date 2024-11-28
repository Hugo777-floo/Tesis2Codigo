import React from 'react';
import { useHistory } from 'react-router-dom';
import { NavContainer, NavButton } from './styles';
import { NavBarProps, NavItem } from './types';

const NavBar: React.FC<NavBarProps> = ({ items, activeItem, onItemSelect }) => {

  const history = useHistory();

  const handleClick = (label: string) => {
    onItemSelect(label);

    
    if (label === "Mis Datos") {
      history.push("/mis-datos");
    } else if (label === "Menú") {
      history.push("/home");
    }
    
  };


  return (
    <NavContainer>
      {items.map((item) => (
        <NavButton
          key={item.label}
          isActive={item.label === activeItem}
          onClick={() => onItemSelect(item.label)}
        >
          {item.label}
        </NavButton>
      ))}
    </NavContainer>
  );
};

export default NavBar;
