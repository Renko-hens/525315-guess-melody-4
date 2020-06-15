import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

describe(`Render Components from App`, () => {
  it(`Render App`, () =>{
    const tree = renderer.create(<App errorCount={3}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
