import React, {Fragment} from "react";
import PropTypes from "prop-types";

const Player = (props) => {
  const {onPlayButtonClick, isLoading, isPlaying, children} = props;

  return (
    <Fragment>
      <button className={`track__button track__button--${isPlaying ? `pause` : `play`}`} type="button"
        disabled = {isLoading}
        onClick={() => onPlayButtonClick()}
      />
      <div className="track__status">
        {children}
      </div>
    </Fragment>
  );
};

Player.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default Player;
