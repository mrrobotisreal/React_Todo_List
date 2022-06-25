import React from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container } from 'react-bootstrap';

import './Navbar.css';

const Search = () => {
  return (
    <Navbar className="NavSearch" bg="dark" expand="md">
      <Container fluid>
        <Navbar.Brand href="#home">Todo List</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{maxHeight: '100px'}}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Search;