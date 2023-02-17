import { Navbar, Nav, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
const Footer = () => {
  const sel = useSelector((state) => state.select.selectedSong);
  const songFromReduxStore = useSelector((state) => state.songDetails.song);
  return (
    <Navbar
      fixed="bottom"
      collapseOnSelect
      bg="dark"
      variant="dark"
      className="foo"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">
            {sel ? (
              <>
                {" "}
                <div className="d-flex" style={{ gap: "10px" }}>
                  <img
                    src={sel.s.album.cover_medium}
                    alt="gvh"
                    height="50px"
                    width="50px"
                  />

                  <div>
                    <h6>{sel.s.title}</h6>
                    <h6>{sel.s.artist.name}</h6>
                  </div>
                </div>
              </>
            ) : songFromReduxStore.length > 0 ? (
              <>
                {" "}
                <div className="d-flex" style={{ gap: "10px" }}>
                  <img
                    src={
                      songFromReduxStore[songFromReduxStore.length - 1].data[0]
                        .album.cover_medium
                    }
                    alt="gvh"
                    height="50px"
                    width="50px"
                  />

                  <div>
                    <h6>
                      {
                        songFromReduxStore[songFromReduxStore.length - 1]
                          .data[0].title
                      }
                    </h6>
                    <h6>
                      {
                        songFromReduxStore[songFromReduxStore.length - 1]
                          .data[0].artist.name
                      }
                    </h6>
                  </div>
                </div>
              </>
            ) : (
              <Spinner animation="border" variant="success" />
            )}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Footer;
