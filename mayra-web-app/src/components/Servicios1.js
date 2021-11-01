import {
  Container,
  Card,
  // Row,
  Col,
  ListGroup,
} from "react-bootstrap";

function Servicios1(props) {
  return (
    <Container>
      {/* <Row> */}
      <Col>
        <Card
          className="border-white mt-sm-5 mb-sm-5 border-0 bg-transparent"
          style={{ width: "", fontSize: "1.5rem" }}
        >
          <Card.Header style={{ fontSize: "3rem" }}>{props.title1}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item className='bg-transparent'>{props.text11}</ListGroup.Item>
            <ListGroup.Item className='bg-transparent'>{props.text12}</ListGroup.Item>
            <ListGroup.Item className='bg-transparent'>{props.text13}</ListGroup.Item>
            <ListGroup.Item className='bg-transparent'>{props.text14}</ListGroup.Item>
            <ListGroup.Item className='bg-transparent'>{props.text15}</ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      <Col>
        <Card
          className="border-0 bg-transparent mt-sm-5 mb-sm-5"
          style={{ width: "", fontSize: "1.5rem" }}
        >
          <Card.Header style={{ fontSize: "3rem" }}>{props.title2}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item className='bg-transparent'>{props.text21}</ListGroup.Item>
            <ListGroup.Item className='bg-transparent'>{props.text22}</ListGroup.Item>
            <ListGroup.Item className='bg-transparent'>{props.text23}</ListGroup.Item>
            <ListGroup.Item className='bg-transparent'>{props.text24}</ListGroup.Item>
            {/* <ListGroup.Item>{props.text6}</ListGroup.Item> */}
          </ListGroup>
        </Card>
      </Col>
      {/* </Row> */}
      {/* <Row> */}
      <Col>
        <Card
          className="border-0 bg-transparent mt-sm-5 mb-sm-5 "
          style={{ width: "", fontSize: "1.5rem" }}
        >
          <Card.Header style={{ fontSize: "3rem" }}>{props.title3}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item className='bg-transparent'>{props.text31}</ListGroup.Item>
            <ListGroup.Item className='bg-transparent'>{props.text32}</ListGroup.Item>
            <ListGroup.Item className='bg-transparent'>{props.text33}</ListGroup.Item>
            <ListGroup.Item className='bg-transparent'>{props.text34}</ListGroup.Item>
            <ListGroup.Item className='bg-transparent'>{props.text35}</ListGroup.Item>
            <ListGroup.Item className='bg-transparent'>{props.text36}</ListGroup.Item>
            <ListGroup.Item className='bg-transparent'>{props.text37}</ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      <Col>
        <Card
          className="border-0 bg-transparent mt-sm-5 mb-sm-5"
          style={{ width: "", fontSize: "1.5rem" }}
        >
          <Card.Header style={{ fontSize: "3rem" }}>{props.title4}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item className='bg-transparent'>{props.text41}</ListGroup.Item>
            <ListGroup.Item className='bg-transparent'>{props.text42}</ListGroup.Item>
            <ListGroup.Item className='bg-transparent'>{props.text43}</ListGroup.Item>
            <ListGroup.Item className='bg-transparent'>{props.text44}</ListGroup.Item>
            <ListGroup.Item className='bg-transparent'>{props.text45}</ListGroup.Item>
            {/* <ListGroup.Item>{props.text6}</ListGroup.Item> */}
            {/* <ListGroup.Item>{props.text37}</ListGroup.Item> */}
          </ListGroup>
        </Card>
      </Col>
      {/* </Row> */}
    </Container>
  );
}

export default Servicios1;
