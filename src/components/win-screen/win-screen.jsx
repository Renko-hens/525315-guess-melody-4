import React from 'react';
import PropTypes from "prop-types";

const WinScreen = (props) => {
  const {mistakes} = props;
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
          <p className="result__total">Вы ответили правильно на 6 вопросов и совершили {mistakes > 1 ? `${mistakes} ошибки` : `${mistakes} ошибку`}</p>
          <button className="replay" type="button">Сыграть ещё раз</button>
        </section>
      </section>
    </React.Fragment>
  );
};

WinScreen.propTypes = {
  mistakes: PropTypes.number.isRequired,
};

export default WinScreen;
