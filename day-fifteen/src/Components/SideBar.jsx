import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  let search = useSelector((state) => state.songDetails.search);

  const dispatch = useDispatch();
  return (
    <div className="side mt-5 pt-5">
      <Link to="/">
        <p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/2048px-Home-icon.svg.png"
            className="left-icons"
            alt=""
          />
          Home
        </p>
      </Link>

      <p
        onClick={() => {
          dispatch({
            type: "SEARCH_BAR",
            payload: !search,
          });
        }}
      >
        <img
          src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png"
          alt=""
          className="left-icons"
        />
        Search
      </p>
      <p>
        <img
          src="https://icon-library.com/images/add-to-playlist-icon/add-to-playlist-icon-12.jpg"
          className="left-icons"
          alt=""
        />
        Your Library
      </p>
      <br></br>
      <Link to="/favourites">
        <p>
          <img
            src="https://cdn0.iconfinder.com/data/icons/spotify-line-ui-kit/100/save-to-your-liked-songs-512.png"
            className="left-icons"
            alt=""
          />
          Liked Songs
        </p>
      </Link>
      <hr className="aside-hr"></hr>
    </div>
  );
};

export default SideBar;
