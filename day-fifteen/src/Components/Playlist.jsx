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
    dispatch(getSong("rock"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const songFromReduxStore = useSelector((state) => state.songDetails.song);

  return (
    <>
      <Container>
        <h3 className="text-white mt-5 pt-5 d-flex justify-content-between align-items-end ">
          <span>Good Morning</span>
        </h3>
        <Row>
          {songFromReduxStore.length > 0 ? (
            songFromReduxStore[songFromReduxStore.length - 1].data
              .slice(15, 21)
              .map((s) => (
                <Col
                  xs={4}
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

        <h3 className="text-white mt-4 d-flex justify-content-between align-items-end">
          <span>Recently played</span>
        </h3>
        <Row>
          {songFromReduxStore.length > 0 ? (
            songFromReduxStore[songFromReduxStore.length - 1].data
              .slice(0, 5)
              .map((s) => (
                <Col
                  key={s.id}
                  className="h-100"
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
        <h3 className="text-white mt-4 d-flex justify-content-between align-items-end">
          <span>Shows to try</span>
        </h3>
        <Row style={{ marginBottom: "8rem" }}>
          {songFromReduxStore.length > 0 ? (
            songFromReduxStore[songFromReduxStore.length - 1].data
              .slice(6, 11)
              .map((s) => (
                <Col
                  key={s.id}
                  className="h-100"
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
