import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSong, selectSongAction } from "../redux/action";
import { useEffect } from "react";
import Cards from "./Cards";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import VerticalCard from "./VerticalCard";

const Playlist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSong("coldplay"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const songFromReduxStore = useSelector((state) => state.songDetails.song);

  return (
    <>
      <Container fluid>
        <h3 className="text-white mt-5 pt-5 ">
          <span>Good Morning</span>
        </h3>
        <Row>
          {songFromReduxStore.length > 0 ? (
            songFromReduxStore[songFromReduxStore.length - 1].data
              .slice(15, 21)
              .map((s) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  key={s.id}
                  className="h-100"
                  onClick={() => {
                    dispatch(selectSongAction({ s }));
                  }}
                >
                  <VerticalCard song={s} />
                </Col>
              ))
          ) : (
            <Spinner animation="border" variant="success" />
          )}
        </Row>

        <h3 className="text-white mt-4  ">
          <span>Recently played</span>
        </h3>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          {songFromReduxStore.length > 0 ? (
            songFromReduxStore[songFromReduxStore.length - 1].data
              .slice(0, 5)
              .map((s) => (
                <Col
                  key={s.id}
                  className="d-flex align-items-stretch mb-3"
                  onClick={() => {
                    dispatch(selectSongAction({ s }));
                  }}
                >
                  <Cards song={s} />
                </Col>
              ))
          ) : (
            <Spinner animation="border" variant="success" />
          )}
        </Row>
        <h3 className="text-white mt-4  ">
          <span>Shows to try</span>
        </h3>
        <Row
          style={{ marginBottom: "8rem" }}
          className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5"
        >
          {songFromReduxStore.length > 0 ? (
            songFromReduxStore[songFromReduxStore.length - 1].data
              .slice(6, 11)
              .map((s) => (
                <Col
                  key={s.id}
                  className="d-flex align-items-stretch mb-3"
                  onClick={() => {
                    dispatch(selectSongAction({ s }));
                  }}
                >
                  <Cards song={s} />
                </Col>
              ))
          ) : (
            <Spinner animation="border" variant="success" />
          )}
        </Row>
      </Container>
    </>
  );
};

export default Playlist;
