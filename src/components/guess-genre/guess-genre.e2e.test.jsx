import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GuessGenreScreen from "./guess-genre.jsx";

configure({adapter: new Adapter()});

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        type: `rock`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        type: `jazz`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        type: `blues`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        type: `country`,
      }
    ],
  },
};

describe(`Test components Guess Genre Screen`, () => {
  it(`Should Guess Genre Screen form send`, () => {
    const {question} = mock;
    const onAnswer = jest.fn();

    const genreQuestion = shallow(<GuessGenreScreen
      onAnswer={onAnswer}
      question={question}
    />);

    const form = genreQuestion.find(`form`);
    const formSendPrevention = jest.fn();
    form.simulate(`submit`, {
      preventDefault: formSendPrevention,
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);

  });

  it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
    const {question} = mock;
    const onAnswer = jest.fn((...args) => [...args]);
    const userAnswer = [false, true, false, false];

    const genreQuestion = shallow(<GuessGenreScreen
      onAnswer={onAnswer}
      question={question}
    />);

    const form = genreQuestion.find(`form`);
    const inputTwo = genreQuestion.find(`input`).at(1);

    inputTwo.simulate(`change`, {target: {checked: true}});
    form.simulate(`submit`, {preventDefault() {}});

    expect(onAnswer).toHaveBeenCalledTimes(1);

    expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
    expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);

    expect(genreQuestion.find(`input`).map((answerInput) => answerInput.prop(`checked`)))
      .toEqual(userAnswer);
  });
});
