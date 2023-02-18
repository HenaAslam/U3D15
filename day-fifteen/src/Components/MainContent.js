import { Row, Col } from "react-bootstrap";
import Playlist from "./Playlist";
import SideBar from "./SideBar";
const MainContent = () => {
  return (
    <Row>
      <Col xs={2}>
        <SideBar />
      </Col>
      <Col xs={10}>
        <Playlist />
      </Col>
    </Row>
  );
};
export default MainContent;
