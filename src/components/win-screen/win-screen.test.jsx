import React from "react";
import renderer from "react-test-renderer";
import {WinScreen} from "./win-screen.jsx";

describe(`All renders there`, () => {
  it(`Check snapshot WinScreen`, () => {
    const tree = renderer.create(
        <WinScreen
          mistakes={2}
        ></WinScreen>
    );

    expect(tree).toMatchSnapshot();
  });
});
