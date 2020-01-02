import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


export default class Navbar2 extends Component {
    constructor(props) {
        super(props)
    }

    handleNavigation = (e) => {
        this.props.history.push(e)
        // console.log(this.props)
    }

    render() {
        return (
            <Navbar className="sticky-top" bg="light" expand="lg">
                <Navbar.Brand onClick={() => this.handleNavigation('/')}>ITS Boilerplate</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


