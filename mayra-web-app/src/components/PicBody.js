import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

function PicBody(props) {
  return (
    <Container fluid className="">
      <Row className="justify-content-lg-around align-content-lg-between">
        <Col lg={3}>
          <div className="text-center" style={{ }}>
            <Card.Img variant="top" src={props.src} style={{}} />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>{props.text2}</Card.Text>
            </Card.Body>
          </div>
        </Col>
        <Col lg={6}>
          <Card
            className="text-center border-0 shadow mb-sm-5 mt-lg-3"
            style={{ fontSize: "1.5rem", lineHeight: "2", backgroundColor: 'yellow' }}
          >
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title as="h2" style={{ fontSize: "1.5rem" }}>
                {props.title}
              </Card.Title>
              <Card.Text>
                <em>{props.text1}</em>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default PicBody;
