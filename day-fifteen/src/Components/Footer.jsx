import { Navbar, Nav, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
const Footer = () => {
  const sel = useSelector((state) => state.select.selectedSong);
  const songFromReduxStore = useSelector((state) => state.songDetails.song);
  console.log(sel?.s);
  const minutes = Math.floor(sel?.s.duration / 60);
  const seconds = sel?.s.duration - minutes * 60;
  const min = Math.floor(
    songFromReduxStore[songFromReduxStore.length - 1]?.data[0].duration / 60
  );
  const sec =
    songFromReduxStore[songFromReduxStore.length - 1]?.data[0].duration -
    min * 60;

  const audio = new Audio(
    sel?.s.preview ||
      songFromReduxStore[songFromReduxStore.length - 1]?.data[0].preview
  );

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
          <Nav.Link href="#features">
            {sel ? (
              <>
                {" "}
                <div className="d-flex mt-5" style={{ gap: "10px" }}>
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
                  <div className="ml-5 pl-5 mt-n3">
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

                    <div className="play-line-div">
                      <p>0:00</p>
                      <input
                        className="volume-line mt-3"
                        type="range"
                        min="0"
                        max="30"
                      />

                      <p>
                        {minutes} : {seconds < 10 ? "0" + seconds : seconds}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : songFromReduxStore.length > 0 ? (
              <>
                {" "}
                <div className="d-flex mt-5 mr-5" style={{ gap: "10px" }}>
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
                    <div className="ml-5 pl-5 " style={{ marginTop: "-4rem" }}>
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

                      <div className="play-line-div">
                        <p>0:00</p>
                        <input
                          className="volume-line mt-3"
                          type="range"
                          min="0"
                          max="30"
                        />

                        <p>
                          {min} : {sec < 10 ? "0" + sec : sec}
                        </p>
                      </div>
                    </div>
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
