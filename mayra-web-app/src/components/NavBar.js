import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/mayra-web-app">
          Mayra Maldonado Brignoni
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Inicio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/SobreMi">
              <Nav.Link>Trayectoria</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/QueOfrecemos">
              <Nav.Link>Ofrecimientos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/MiLibro">
              <Nav.Link>Libros</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Podcast">
              <Nav.Link>Podcast</Nav.Link>
            </LinkContainer>
            {/* <NavDropdown title="Mas" id="basic-nav-dropdown">
              <NavDropdown.Item to="/Contactos">Contactos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="/Noticias">Noticias</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
