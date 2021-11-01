import Carousel from "react-bootstrap/Carousel";
import carpic1 from "../img/carpic1.jpeg";
import carpic2 from "../img/carpic2.jpeg";
import carpic3 from "../img/carpic3.jpeg";

function PicCarousel() {
  return (
    <div className="">
      <Carousel
        className=""
        style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={carpic1} alt="First slide" />
          {/* <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carpic2} alt="Second slide" />

          {/* <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carpic3} alt="Third slide" />

          {/* <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default PicCarousel;
