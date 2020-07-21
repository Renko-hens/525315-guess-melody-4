import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {GameType} from "../../const.js";

class GuessGenreScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: [false, false, false, false],
    };
  }

  render() {
    const {answers: userAnswers} = this.state;
    const {onAnswer, question, renderPlayer} = this.props;
    const {answers, genre} = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();

            onAnswer(question, this.state.answers);
          }}
        >

          {answers.map((answer, i) => (
            <div key={`${i}-${answer.src}`} className="track">

              {renderPlayer(answer.src, i)}

              <div className="game__answer">
                <input className="game__input visually-hidden" type="checkbox" name="answer"
                  id={`answer-${i}`}
                  value={`answer-${i}`}
                  checked={userAnswers[i]}
                  onChange={(evt) => {
                    const value = evt.target.checked;

                    this.setState({
                      answers: [...userAnswers.slice(0, i), value, ...userAnswers.slice(i + 1)],
                    });
                  }}
                />
                <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
              </div>
            </div>
          ))}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

GuessGenreScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default GuessGenreScreen;
