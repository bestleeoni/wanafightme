import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand tag={Link} to="/">WannaFight</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/blogs">Blogs บทความ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about">About บทนำ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/Contact">ทำความรู้จักกับคนเขียน</NavLink>
            </NavItem>

          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/Podcast">Podcast</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;