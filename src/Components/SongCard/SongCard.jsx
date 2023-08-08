import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadNewSongs } from "../../store/searchSlice";

const SongCard = (props) => {
  const { song, songs } = props;
  return (
    <Link
      to="/now-playing"
      className="item"
      onClick={() => {
        props.loadNewSongs(songs);
      }}
    >
      <div class="card shadow-sm border-0 rounded genCard">
        <div class="card-body p-0">
          <img
            src={song.album.coverArt}
            alt=""
            class="w-100 card-img-top cardImage"
          />
          <div class="songInnerText">
            <span class="songName">{song.title.slice(0, 10)}</span>
            <span class="text-muted songCountDetails">
              {song.artist.stageName}:{song.noOfPlays / 1000}K plays
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

SongCard.propTypes = {
  loadNewSongs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  songList: state.app.searchResults.nowPlayingList,
});
export default connect(mapStateToProps, {
  loadNewSongs,
})(SongCard);
