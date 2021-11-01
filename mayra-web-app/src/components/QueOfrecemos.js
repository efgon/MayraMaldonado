import { Container, Row, Col } from "react-bootstrap";
import { Card, ListGroup } from "react-bootstrap";

function QueOfrecemos(props) {
  return (
    <Container className="mt-5 mb-5 text-center">
      <Card.Title as="h3" style={{ fontSize: "2rem" }}>
        Servicios:
      </Card.Title>
      <Row className="justify-content-center align-content-center justify-content-lg-around">
        <Col lg>
          <div
            className="text-center border-white mt-sm-5 mb-sm-5 yellow"
            style={{ width: "", fontSize: "1rem" }}
          >
            <Card.Header style={{ fontSize: "2rem" }}>
              {props.title1}
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-transparent">
                {props.text2}
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent">
                {props.text3}
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent">
                {props.text4}
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent">
                {props.text9}
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
        <Col lg>
          <div
            className="text-center border-white mt-sm-5 mb-sm-5 yellow"
            style={{ width: "", fontSize: "1rem" }}
          >
            <Card.Header style={{ fontSize: "2rem" }}>
              {props.title5}
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-transparent">
                {props.text6}
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent">
                {props.text7}
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent">
                {props.text8}
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent">
                {props.text10}
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default QueOfrecemos;
