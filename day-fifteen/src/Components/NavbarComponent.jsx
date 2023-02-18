import { useState } from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSong } from "../redux/action";
import { useSelector } from "react-redux";

const NavbarComponent = () => {
  const [play, setPlay] = useState("");
  const dispatch = useDispatch();
  let search = useSelector((state) => state.songDetails.search);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getSong(play));
  };

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
      <Link to="/">
        <div className="navbar-brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1200px-Spotify_logo_with_text.svg.png"
            alt="logo"
            height="40px"
            width="120px"
          />
        </div>
      </Link>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto ml-2 mt-2">
          <Form onSubmit={handleSubmit} className={search ? "hidden" : ""}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="search"
                value={play}
                onChange={(event) => setPlay(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Nav>
        <Nav className="ml-auto">
          <Button className="btn btn-secondary dropdown-toggle rounded-pill">
            Hena
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavbarComponent;
