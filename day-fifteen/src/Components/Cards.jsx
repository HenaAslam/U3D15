import { Card } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../redux/action";
const Cards = (props) => {
  const favourites = useSelector((state) => state.fav.list);
  const isFav = favourites.includes(props.song);
  const dispatch = useDispatch();
  return (
    <Card>
      <Card.Img variant="top" src={props.song.album.cover_medium} />
      <Card.Body className="d-flex flex-column justify-content-evenly ">
        <Card.Title>{props.song.title}</Card.Title>
        <Card.Text>{props.song.artist.name}</Card.Text>
        {isFav ? (
          <HeartFill
            color="green"
            size={16}
            className="mr-2 my-auto"
            onClick={() =>
              dispatch({
                type: REMOVE_FROM_FAVOURITE,
                payload: props.song,
              })
            }
          />
        ) : (
          <Heart
            color="green"
            size={16}
            className="mr-2 my-auto"
            onClick={() =>
              dispatch({
                type: ADD_TO_FAVOURITE,
                payload: props.song,
              })
            }
          />
        )}
      </Card.Body>
    </Card>
  );
};
export default Cards;
