import React from "react";
import {
  Trend1,
  Trend10,
  Trend2,
  Trend3,
  Trend4,
  Trend5,
  Trend6,
  Trend7,
  Trend8,
  Trend9,
} from "../../../Assets/Trending";
import SongCard from "../../../Components/SongCard/SongCard";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadNewSongs } from "../../../store/searchSlice";

const songs = [
  {
    _id: 1,
    artist: {
      stageName: "Davido",
    },
    album: { coverArt: Trend1 },
    title: "Gobe",
    noOfPlays: 20000,
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    _id: 2,
    artist: {
      stageName: "Davido",
    },
    album: { coverArt: Trend2 },
    title: "Gobe",
    noOfPlays: 20000,
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
];
const Trending = () => {
  return (
    <div>
      <p className="header-text">Trending Songs</p>
      <div className="row pt-3 m-0">
        {songs.map((song) => (
          <SongCard song={song} songs={songs} key={songs._id} />
        ))}
      </div>
    </div>
  );
};
Trending.propTypes = {
  loadNewSongs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  songList: state.app.searchResults.nowPlayingList,
});
export default connect(mapStateToProps, {
  loadNewSongs,
})(Trending);
