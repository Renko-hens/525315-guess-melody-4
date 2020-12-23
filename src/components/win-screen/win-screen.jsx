import React from 'react';
import PropTypes from "prop-types";

const WinScreen = (props) => {
  const {questionsCount, mistakesCount, onReplayButtonClick} = props;
  const correctlyQuestionsCount = questionsCount - mistakesCount;

  return (
    <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" style={{position: `absolute`, left: `-1200em`}}>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation={5} />
          <feOffset dx={0} dy={0} />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </svg>
      <section className="main" id="root">
        <section className="result">
          <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width={186} height={83} /></div>
          <h2 className="result__title">Вы настоящий меломан!</h2>
          <p
            className="result__total"
          >
            Вы ответили правильно на
            {correctlyQuestionsCount}
            вопросов и совершили
            {mistakesCount > 1 ? `${mistakesCount} ошибки` : `${mistakesCount} ошибку`}
          </p>
          <button
            className="replay"
            type="button"
            onClick={onReplayButtonClick}
          >
            Сыграть ещё раз
          </button>
        </section>
      </section>
    </React.Fragment>
  );
};

WinScreen.propTypes = {
  questionsCount: PropTypes.number.isRequired,
  mistakesCount: PropTypes.number.isRequired,
  onReplayButtonClick: PropTypes.func.isRequired,
};

export default WinScreen;
