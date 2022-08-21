import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LocalMallIcon from '@mui/icons-material/LocalMall'

function Header() {

    return (
        <Navbar variant="dark" expand="md" sticky="top" className="my-color">
            <Container>
                <Navbar.Brand href="#" className="p-3 fw-bolder fs-4">
                    <LocalMallIcon fontSize="large" className="mr-1 pb-2" />
                    FLIPZON
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fs-5">
                        <Nav.Link href="#products" className="p-3">Products</Nav.Link>
                        <Nav.Link href="#about" className="p-3">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header