import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCompactDisc,
  faPlay,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

const Track = props => {
  const { track } = props;
  const CD = <FontAwesomeIcon icon={faCompactDisc} />;
  const play_btn = <FontAwesomeIcon icon={faPlay} />;
  const chevronRight = <FontAwesomeIcon icon={faChevronRight} />;

  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              {play_btn}
              <span> Track</span>
            </strong>
            : {track.track_name}
            <br />
            <strong>
              {CD}
              <span> Album</span>
            </strong>
            : {track.album_name}
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-dark btn-block"
          >
            {chevronRight} View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
