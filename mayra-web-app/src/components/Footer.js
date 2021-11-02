import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

function Footer() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link>Inicio</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/SobreMi">
            <Nav.Link>Sobre mi</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/QueOfrecemos">
            <Nav.Link>Servicios</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Podcast
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <p>
        Copyright © 2021 - 22 · www.MayraMaldonado.com · Todos los derechos
        reservados.
      </p>
    </>
  );
}
export default Footer;
