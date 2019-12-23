import React from "react";
import {Nav, Navbar, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";
import '../../NewNote/NewNote.css';

const NavigationNotes = () => {
  return (
    <Navbar color="light" light expand="md">
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink className="button_link" tag={RouterNavLink} to="/notes">Notes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="button_link" tag={RouterNavLink} to="/add-note">Submit new note</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavigationNotes;