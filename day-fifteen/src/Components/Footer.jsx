import { Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
const Footer = () => {
  const sel = useSelector((state) => state.select.selectedSong);

  console.log(sel?.s);
  const minutes = Math.floor(sel?.s.duration / 60);
  const seconds = sel?.s.duration - minutes * 60;

  const audio = new Audio(sel?.s.preview);

  const start = (e) => {
    if (e.target.src === "https://cdn-icons-png.flaticon.com/512/0/375.png") {
      audio.play();
      e.target.src = "https://cdn-icons-png.flaticon.com/512/786/786279.png";
    } else if (
      e.target.src === "https://cdn-icons-png.flaticon.com/512/786/786279.png"
    ) {
      audio.pause();
      e.target.src = "https://cdn-icons-png.flaticon.com/512/0/375.png";
    }
  };
  return (
    <Navbar
      fixed="bottom"
      collapseOnSelect
      bg="dark"
      variant="dark"
      className="foo text-white"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">
            {sel ? (
              <>
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
                  <div className=" mt-n3 play">
                    <div className=" d-flex justify-content-center ml-5 pl-5">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3580/3580337.png"
                        className="play-bar-icons play-bar-icons-big"
                        id="shuffle-icon"
                        alt=""
                      />
                      <img
                        src="https://icons.veryicon.com/png/o/object/material-design-icons/skip-previous.png"
                        className="play-bar-icons play-bar-icons-big"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/0/375.png"
                        className="play-bar-icons play-button"
                        alt=""
                        onClick={(e) => start(e)}
                      />

                      <img
                        src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_skip_next_48px-512.png"
                        className="play-bar-icons play-bar-icons-big"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1142/1142347.png"
                        className="play-bar-icons play-bar-icons-big"
                        alt=""
                      />
                    </div>

                    <div className="play-line-div pb-n5 mb-n5">
                      <p>0:00</p>
                      <input
                        className="volume-line mt-3"
                        type="range"
                        min="0"
                        max="30"
                      />

                      <p>
                        {minutes}:{seconds < 10 ? "0" + seconds : seconds}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="select-msg">
                <h6>Select a song to play!</h6>
              </div>
            )}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Footer;
