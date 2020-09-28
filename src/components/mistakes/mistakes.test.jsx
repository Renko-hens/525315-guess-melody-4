import React from "react";
import renderer from "react-test-renderer";
import Mistakes from "./mistakes.jsx";

describe(``, () => {
  it(`With noone count`, () => {
    const tree = renderer.create(
        <Mistakes
          count={0}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With one count`, () => {
    const tree = renderer.create(
        <Mistakes
          count={1}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
