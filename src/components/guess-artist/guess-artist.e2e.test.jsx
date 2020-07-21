import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GuessArtistScreen from "./guess-artist.jsx";

configure({
  adapter: new Adapter(),
});

const mock = {
  question: {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [
      {
        picture: `pic-one`,
        artist: `Keanu Reves`,
      },
      {
        picture: `pic-two`,
        artist: `John Wick`,
      },
      {
        picture: `pic-three`,
        artist: `Neo Man`,
      },
    ],
  },
};

const mockEvent = {
  preventDefault() {}
};

describe(`Test components Guess Genre Screen`, () => {
  it(`Click on user answer should pass to the callback data-object from which this answer was created`, () => {
    const {question} = mock;
    const onAnswer = jest.fn();
    const userAnswer = {
      picture: `pic-one`,
      artist: `Keanu Reves`,
    };

    const artistQuestion = shallow(<GuessArtistScreen
      onAnswer={onAnswer}
      question={question}
      renderPlayer={() => {}}
    />);

    const answerInputs = artistQuestion.find(`input`);
    const answerOne = answerInputs.at(0);

    answerOne.simulate(`change`, mockEvent);

    expect(onAnswer).toHaveBeenCalledTimes(1);

    expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
    expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
  });
});
