import { Row, Col, Container } from "react-bootstrap";
import Playlist from "./Playlist";
import SideBar from "./SideBar";
const MainContent = () => {
  return (
    <Container fluid className="mx-n3">
      <Row className="main">
        <Col xs={2}>
          <SideBar />
        </Col>
        <Col xs={10}>
          <Playlist />
        </Col>
      </Row>
    </Container>
  );
};
export default MainContent;
