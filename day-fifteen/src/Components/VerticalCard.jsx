import { Card, Row, Col } from "react-bootstrap";

const VerticalCard = (props) => {
  return (
    <Row className="text-white">
      <Col xs={3} className="mr-n3 " style={{ height: "70px" }}>
        <Card.Img
          variant="top"
          src={props.song.album.cover_medium}
          height="70px"
          width="70px"
        />
      </Col>
      <Col xs={9} className="good-morning mb-3" style={{ height: "70px" }}>
        <h6>{props.song.title}</h6>
        <h6>{props.song.artist.name}</h6>
      </Col>
    </Row>
  );
};
export default VerticalCard;
