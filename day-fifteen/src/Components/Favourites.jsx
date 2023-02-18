import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Container, Jumbotron, Button } from "react-bootstrap";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";

import { selectSongAction } from "../redux/action";

const Favourites = () => {
  const favourites = useSelector((state) => state.fav.list);
  console.log(favourites);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Container fluid className="mt-5  pt-5">
        <Jumbotron className="jumbotron text-white text-center">
          <h1>Liked Songs</h1>
          {/*  */}
        </Jumbotron>
        <Row className="mb-5 ">
          {favourites.length > 0 ? (
            favourites.map((s) => (
              <Col
                xs={3}
                key={s.id}
                className="mb-5"
                onClick={() => {
                  dispatch(selectSongAction({ s }));
                }}
              >
                <Cards song={s} />
              </Col>
            ))
          ) : (
            <>
              <div className="d-flex flex-column align-items-center w-100 text-center text-white">
                <h4>Songs you like will appear here</h4>
                <h6>Save songs by tapping the heart icon.</h6>
                <Button
                  className="rounded-pill mt-3 "
                  variant="light"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Find Songs
                </Button>
              </div>
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Favourites;
