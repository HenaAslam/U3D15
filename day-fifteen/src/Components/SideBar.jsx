import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side mt-5 pt-5">
      <Link to="/">
        <p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/2048px-Home-icon.svg.png"
            class="left-icons"
            alt=""
          />
          Home
        </p>
      </Link>

      <p>
        <img
          src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png"
          alt=""
          class="left-icons"
        />
        Search
      </p>
      <p>
        <img
          src="https://icon-library.com/images/add-to-playlist-icon/add-to-playlist-icon-12.jpg"
          class="left-icons"
          alt=""
        />
        Your Library
      </p>
      <br></br>
      <Link to="/favourites">
        <p>
          <img
            src="https://cdn0.iconfinder.com/data/icons/spotify-line-ui-kit/100/save-to-your-liked-songs-512.png"
            class="left-icons"
            alt=""
          />
          Liked Songs
        </p>
      </Link>
      <hr class="aside-hr"></hr>
    </div>
  );
};

export default SideBar;
