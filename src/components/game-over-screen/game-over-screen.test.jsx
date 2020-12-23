import React from "react";
import renderer from "react-test-renderer";
import GameOverScreen from './game-over-screen.jsx';

describe(`All renders there`, () => {
  it(`Check snapshot Game Over Screen`, () => {
    const tree = renderer.create(
        <GameOverScreen/>
    );

    expect(tree).toMatchSnapshot();
  });
});
