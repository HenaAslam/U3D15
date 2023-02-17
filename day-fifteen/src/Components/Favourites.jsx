import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Cards from "./Cards";

import { selectSongAction } from "../redux/action";

const Favourites = () => {
  const favourites = useSelector((state) => state.fav.list);
  console.log(favourites);
  const dispatch = useDispatch();
  return (
    <Row className="mb-5">
      {favourites.map((s) => (
        <Col
          xs={2}
          key={s.id}
          className="mb-5"
          onClick={() => {
            dispatch(selectSongAction({ s }));
          }}
        >
          <Cards song={s} />
        </Col>
      ))}
    </Row>
  );
};

export default Favourites;
