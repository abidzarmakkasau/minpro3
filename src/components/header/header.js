import React from "react";
import {
    Navbar,
    Container,
    Nav,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Mini Project</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/dashboard-admin">Dashboard Admin</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
