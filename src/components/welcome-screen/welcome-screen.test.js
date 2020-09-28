import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";


describe(`Renders Welcome Screen components`, () => {
  it(`Render component Welcome Screem`, () => {
    const tree = renderer.create(
        <WelcomeScreen
          errorCount={3}
          onWelcomeButtonClick={() => {}}
        />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
