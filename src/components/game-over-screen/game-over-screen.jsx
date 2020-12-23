import React from 'react';

const GameOverScreen = () => {
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
          <h2 className="result__title">Какая жалость!</h2>
          <p className="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
          <button className="replay" type="button">Попробовать ещё раз</button>
        </section>
      </section>
    </React.Fragment>
  );
};

export default GameOverScreen;
