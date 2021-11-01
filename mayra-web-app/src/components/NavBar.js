import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/MayraMaldonado">
          Mayra Maldonado Brignoni
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/MayraMaldonado">Inicio</Nav.Link>
            <Nav.Link to="/SobreMi">Trayectoria</Nav.Link>
            <Nav.Link to="/QueOfrecemos">Ofrecimientos</Nav.Link>
            <Nav.Link to="/MiLibro">Libros</Nav.Link>
            <Nav.Link to="/Podcast">Podcast</Nav.Link>
            <NavDropdown title="Mas" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Contactos">Contactos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Noticias">Noticias</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
