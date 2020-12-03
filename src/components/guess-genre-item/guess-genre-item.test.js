import React from "react";
import renderer from "react-test-renderer";
import GuessGenreScreenItem from "./guess-genre-item.jsx";

const answer = {
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  genre: `rock`,
};

describe(`Render GuessGenreScreenItem components`, () => {
  it(`Render GuessGenreScreenItem`, () => {
    const tree = renderer.create((
      <GuessGenreScreenItem
        answer={answer}
        id={0}
        onChange={() => {}}
        renderPlayer={() => {}}
        userAnswer={false}
      />), {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
