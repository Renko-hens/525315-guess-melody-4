import React from "react";
import renderer from "react-test-renderer";
import GuessGenreScreen from "./guess-genre.jsx";

const questionGenre = {
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
};

describe(`Render GuessGenreScreen components`, () => {
  it(`Render GuessGenreScreen`, () => {
    const tree = renderer.create((
      <GuessGenreScreen
        onAnswer={() => {}}
        question={questionGenre}
      />), {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
