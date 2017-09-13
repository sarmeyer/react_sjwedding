import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends Component {

  render() {
    return (
      <div className="menu">
        <Nav>
          <NavItem>
            <NavLink href="#">Story</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Wedding</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Getting There</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Registry</NavLink>
          </NavItem>
        </Nav>
        <hr />
      </div>
    );
  }
}
