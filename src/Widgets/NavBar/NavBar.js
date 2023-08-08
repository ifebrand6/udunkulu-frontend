import "./NavBar.css";
import { Button } from "../../Components";
import { NavLink } from "react-router-dom";
import { Authentication } from "../../Pages";
import Search from "../Search/Search";

const NavBar = (props) => {
  const isLoggedIn =localStorage.getItem("token");
  const url = window.location.pathname.substring(1);
  const navBar = (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <button
          class="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav" id="navbar-list">
            <li class="nav-item">
              <NavLink to="/trending" className="nav-link">
                Trending
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="select-mood" className="nav-link">
                Mood/Genre
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="recently-added" className="nav-link">
                Recently Added
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="top-artist" className="nav-link">
                Top Artists
              </NavLink>
            </li>
          </ul>
          {isLoggedIn ? null :
            <Button
              variant="sign-in"
              size={"sm"}
              data-target={"#authModal"}
              data-toggle="modal"
            >
              Sign In
            </Button>
          }
        </div>
      </nav>
    </>
  );

  function renderConditionalNavBar() {
    if (url === ("search" || "results")) {
      return <Search />;
    } else {
      return navBar;
    }
  }
  let nav = renderConditionalNavBar();
  return (
    <div>
      {nav}
      <Authentication />
    </div>
  );
};

export { NavBar };
