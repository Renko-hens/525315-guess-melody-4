import React from "react";
import {configure, shallow, mount} from "enzyme";
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
        genre: `rock`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `jazz`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `blues`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `country`,
      }
    ],
  },
};

describe(`Test components Guess Genre Screen`, () => {
  it(`Should Guess Genre Screen form send`, () => {
    const {question} = mock;
    const onUserAnswer = jest.fn();

    const genreQuestion = shallow(<GuessGenreScreen
      onUserAnswer={onUserAnswer}
      question={question}
      renderPlayer={() => {}}
      onChange={() => {}}
      userAnswers={[false, false, false, false]}
    />);

    const form = genreQuestion.find(`form`);
    const formSendPrevention = jest.fn();
    form.simulate(`submit`, {
      preventDefault: formSendPrevention,
    });

    expect(onUserAnswer).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);

  });

  it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
    const {question} = mock;
    const onUserAnswer = jest.fn((...args) => [...args]);
    const userAnswer = [false, true, false, false];

    const genreQuestion = mount(<GuessGenreScreen
      onUserAnswer={onUserAnswer}
      question={question}
      renderPlayer={() => {}}
      onChange={() => {}}
      userAnswers={userAnswer}
    />);

    const form = genreQuestion.find(`form`);
    const inputTwo = genreQuestion.find(`input`).at(1);

    inputTwo.simulate(`change`, {target: {checked: true}});
    form.simulate(`submit`, {preventDefault() {}});

    expect(onUserAnswer).toHaveBeenCalledTimes(1);

    expect(onUserAnswer.mock.calls[0][0]).toEqual(void 0);

    expect(genreQuestion.find(`input`).map((answerInput) => answerInput.prop(`checked`)))
      .toEqual(userAnswer);
  });
});
