import { Container, Row, Col, Card } from "react-bootstrap";
import pic2 from "../img/mayramaldonado/image49.jpeg";
import pic1 from "../img/carpic4.jpeg";
import pic3 from "../img/carpic2.jpeg";
import pic4 from "../img/IMG_2296.JPG";
import pic5 from "../img/IMG_0665.JPG";
import pic6 from "../img/IMG_E2343.JPG";
function SobreMiGallery(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Card.Img src={pic3}></Card.Img>
        </Col>
        <Col>
          <Card.Img src={pic4}></Card.Img>
        </Col>
        <Col>
          <Card.Img src={pic1}></Card.Img>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card.Img src={pic5}></Card.Img>
        </Col>
        <Col>
          <Card.Img src={pic6}></Card.Img>
        </Col>
        <Col>
          <Card.Img src={pic2}></Card.Img>
        </Col>
      </Row>
    </Container>
  );
}

export default SobreMiGallery;
