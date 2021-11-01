import { Container, Row, Col } from "react-bootstrap";
import { Card, Button, ListGroup } from "react-bootstrap";

function QueOfrecemos(props) {
  return (
    <Container fluid>
        {/* <Card.Title as="h3" style={{ fontSize: "4rem" }}>
          Que Ofrecemos:
        </Card.Title> */}
      <Row  className='justify-content-center align-content-center justify-content-lg-around'>
        <Col lg>
          <Card className="text-center" style={{ width: "30rem", boxShadow:'10px 10px 8px #888888', marginTop:'5vh' }}>
            <Card.Img variant="top" src={props.src} />
            <Card.Body>
              <Card.Title as="h3">{props.title}</Card.Title>
              <Card.Text>{props.text1}</Card.Text>
              <Button variant="primary">Quiero ver mas!</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg>
          <Card className="text-center" style={{ width: "30rem" , boxShadow:'10px 10px 8px #888888' ,marginTop:'5vh'}}>
            <Card.Img variant="top" src={props.src2} />
            <Card.Body>
              <Card.Title as="h3">{props.title2}</Card.Title>
              <Card.Text>{props.text2}</Card.Text>
              <Button variant="primary">Quiero ver mas!</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg>
          <Card className="text-center" style={{ width: "30rem", boxShadow:'10px 10px 8px #888888', marginTop:'5vh' }}>
            <Card.Img variant="top" src={props.src3} />
            <Card.Body>
              <Card.Title as="h3">{props.title3}</Card.Title>
              <Card.Text>{props.text3}</Card.Text>
              <Button variant="primary">Quiero ver mas!</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Card.Title as="h3" style={{ fontSize: "4rem" }}>
          Para Quien?:
        </Card.Title>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Header>{props.title4}</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>{props.text4}</ListGroup.Item>
              <ListGroup.Item>{props.text5}</ListGroup.Item>
              <ListGroup.Item>{props.text6}</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default QueOfrecemos;
