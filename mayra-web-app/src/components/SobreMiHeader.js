import { Container, Card, Row, Col } from "react-bootstrap";

function SobreMiHeader(props) {
  return (
    <Container fluid>
      <Row className="">
        <Col lg={9}>
          <Card.Title as="h1" style={{ fontSize: "3rem" }}>
            Mayra De Lourdes Maldonado Brignoni
          </Card.Title>
          <Card
            className="border-0 bg-transparent"
            style={{ fontSize: "1.5rem" }}
          >
            <Card.Body>
              <Card.Title as="h2" style={{ fontSize: "2rem" }}>
                Familia:
              </Card.Title>
              <Card.Text>
                Nació en San Juan, Puerto Rico el 4 de abril de 1956.
              </Card.Text>
              <Card.Text>
                Mayra es la tercera de una familia de seis hijos. Sus padres son
                Miguel Angel Camacho (RIP) y Carmen Julia Brignoni Carzamilia.
                Su madre vive actualmente y tiene 94 primaveras.
              </Card.Text>
              <Card.Text>
                Mayra tiene dos hijos: Luis Gabriel, Julyanna Marie. Mayra ya es
                abuela y está felizmente casada con Gerardo Diaz Valentín.
              </Card.Text>
              <Card.Text>
                Los hermanos de Mayra son: Magaly, Miguel, Minerva, Javier y
                Margarita Rosa.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3}>
          <Card.Img className="" src={props.src1}></Card.Img>
        </Col>
      </Row>
      <Row>
        <Col lg={9}>
          <Card
            className=" border-0 bg-transparent"
            style={{ fontSize: "1.5rem" }}
          >
            <Card.Body>
              <Card.Title as="h2" style={{ fontSize: "2rem" }}>
                Trayectoria Profesional:
              </Card.Title>
              <Card.Text>
                Estudió escuela superior en la Escuela Gabriela Mistral, y Trina
                Padilla de Sanz. Estudió para maestra de español en la
                Universidad de Puerto Rico, logrando su bachillerato y en la
                Universidad Ana G. Méndez, finalizó su maestría en Currículo y
                enseñanza.
              </Card.Text>
              <Card.Text>
                Mayra comenzó como maestra en Head Start Presbiterio de San
                Juan, al comenzar como maestra. Fue maestra de elemental en la
                Esc. Nemecio R. Canales. Trabajó en Planificación Familiar del
                Recinto de Ciencias Médicas y finalmente trabajó en La Cruz Azul
                de Puerto Rico hasta el 1999. Mayra renunció a pesar de
                disfrutar mucho su trabajo en La Cruz Azul para estar con su
                familia en momentos donde sus hijos cursaban estudios en escuela
                intermedia.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card.Img src={props.src2}></Card.Img>
        </Col>
      </Row>
    </Container>
  );
}

export default SobreMiHeader;
