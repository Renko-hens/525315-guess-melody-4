import React from "react";
import PropTypes from "prop-types";

const GuessArtistScreen = (props) => {
  const {question, onUserAnswer, renderPlayer} = props;
  const {song, answers} = question;

  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          {renderPlayer(song.src, 0)}
        </div>
      </div>

      <form className="game__artist">

        {answers.map((answer, i) => (
          <div key={`${answer.artist}`} className="artist">
            <input className="artist__input visually-hidden" type="radio" name="answer"
              value={`artist-${i}`}
              id={`answer-${i}`}
              onChange={(evt) => {
                evt.preventDefault();
                onUserAnswer(question, answer);
              }}
            />
            <label className="artist__name" htmlFor={`answer-${i}`}>
              <img className="artist__picture" src={answer.picture} alt={answer.artist} />
              {answer.artist}
            </label>
          </div>
        ))}

      </form>
    </section>
  );
};

GuessArtistScreen.propTypes = {
  question: PropTypes.shape({
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      picture: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })).isRequired
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
};

export default GuessArtistScreen;
