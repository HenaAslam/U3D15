import { Card, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { HeartFill } from "react-bootstrap-icons";
import { REMOVE_FROM_FAVOURITE, ADD_TO_FAVOURITE } from "../redux/action";

const VerticalCard = (props) => {
  const favourites = useSelector((state) => state.fav.list);
  const isFav = favourites.includes(props.song);

  const dispatch = useDispatch();
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
      <Col
        xs={9}
        className="good-morning mb-3 d-flex justify-content-between"
        style={{ height: "70px" }}
      >
        <h6 className="pt-3">{props.song.title}</h6>
        {isFav ? (
          <HeartFill
            color="green"
            size={20}
            className="mr-2 my-auto green"
            onClick={() =>
              dispatch({
                type: REMOVE_FROM_FAVOURITE,
                payload: props.song,
              })
            }
          />
        ) : (
          <HeartFill
            color="white"
            size={20}
            className="mr-2 my-auto white"
            onClick={() =>
              dispatch({
                type: ADD_TO_FAVOURITE,
                payload: props.song,
              })
            }
          />
        )}
      </Col>
    </Row>
  );
};
export default VerticalCard;
