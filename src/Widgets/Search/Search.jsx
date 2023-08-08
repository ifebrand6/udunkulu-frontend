import React, { useState } from "react";
import { Button } from "../../Components";
import "./Search.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadsearchResults } from "../../store/searchSlice";

const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState(null);
  return (
    <div>
      <nav class="navbar m-0" id="search-bar">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            props.loadsearchResults(searchQuery);
          }}
          class="search-form"
          id="searchForm"
        >
          <div class="input-group mb-4  my-3" id="searchArtist">
            <div class=" border-0">
              <span class="btn" id="button-addon4">
                <i class="fa fa-search"></i>
              </span>
            </div>
            <input
              type="search"
              placeholder="Search"
              class="form-control border-0"
              size="50"
              id="artistInput"
              onChange={(e) => {
                e.preventDefault();
                setSearchQuery(e.target.value);
              }}
            />
          </div>
        </form>
        <Button
          variant="sign-in"
          size={"sm"}
          data-target={"#authModal"}
          data-toggle="modal"
          style={{ marginRight: "1.1em" }}
        >
          Sign In
        </Button>
      </nav>
    </div>
  );
};
Search.propTypes = {
  loadsearchResults: PropTypes.func.isRequired,
};

export default connect(null, {
  loadsearchResults,
})(Search);
