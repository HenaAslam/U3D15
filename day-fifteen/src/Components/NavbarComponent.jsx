import { useState } from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSong } from "../redux/action";

const NavbarComponent = () => {
  const [play, setPlay] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getSong(play));
  };

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
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
        <Nav className="ml-auto">
          <Link to="/favourites">
            <div className="nav-link mr-3"> Favourites</div>
          </Link>

          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="search"
                value={play}
                onChange={(event) => setPlay(event.target.value)}
              />
            </Form.Group>
          </Form>
          <NavDropdown
            title="Diego 'Ziba'"
            id="collasible-nav-dropdown"
            className="rounded pill"
          ></NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavbarComponent;
