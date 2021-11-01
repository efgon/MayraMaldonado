import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/SobreMi">Sobre mi</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/QueOfrecemos">Servicios</Nav.Link>
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
