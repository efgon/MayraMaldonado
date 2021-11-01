import { Card } from "react-bootstrap";
function Header(props) {
  return (
    <>
      <div className="text-center" style={{}}>
        <Card.Body>
          <Card.Text as="h1" style={{ fontSize: "10vh" }}>
            {props.text}
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={props.src} style={{}} />
      </div>
    </>
  );
}
export default Header;
