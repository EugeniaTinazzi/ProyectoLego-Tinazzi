import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Lego Star Wars™</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarToggle" />
                <Navbar.Collapse id="navbarToggle">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                    >
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to={"/category/1"}>Sets</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/category/3"}>Cascos</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/category/2"}>Llaveros</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <CartWidget cantCarrito={3} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;