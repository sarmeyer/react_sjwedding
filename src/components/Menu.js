import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Menu extends Component {

  render() {
    return (
      <div className="menu">
        <Nav>
          <NavItem>
            <NavLink href="#home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#Story">Story</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#Wedding">Wedding</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#Directions">Getting There</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#Registry">Registry</NavLink>
          </NavItem>
        </Nav>
        <hr />
      </div>
    );
  };
};
