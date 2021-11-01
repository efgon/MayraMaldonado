import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

function BodyPic(props) {
  return (
    <Container fluid>
      <Row>
        <Card.Title as="h1" style={{ fontSize: "4rem" }}>
          {props.containerTitle}
        </Card.Title>
        <Col lg={8}>
          <Card className="text-center" style={{ fontSize: "1.5rem" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title style={{ fontSize: "2rem" }}>
                {props.title}
              </Card.Title>
              <Card.Text>{props.text1}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm lg={4}>
          <Card className="text-center" style={{}}>
            <Card.Img variant="top" src={props.src} style={{ width: "100%" }} />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>{props.text2}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default BodyPic;
