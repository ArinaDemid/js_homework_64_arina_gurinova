import React from "react";
import {Nav, Navbar, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar color="light" light expand="md">
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink tag={RouterNavLink} to="/">All blocks info</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RouterNavLink} to="/notes">Notes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RouterNavLink} to="/movies">Movies</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RouterNavLink} to="/todo">To do List</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;