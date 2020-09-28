import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Test components Welcome Screen`, () => {
  it(`Should welcome button pressed`, () => {
    const onWelcomeButtonClick = jest.fn();

    const welcomeScreen = mount(
        <WelcomeScreen
          errorCount={3}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
    );

    const welcomeButton = welcomeScreen.find(`button.welcome__button`);

    welcomeButton.simulate(`click`, {preventDefault() {}});

    expect(onWelcomeButtonClick).toHaveBeenCalledTimes(1);
  });
});
