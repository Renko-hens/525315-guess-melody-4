import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;

const questions = [
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Keanu Reves`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `John Wick`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Neo Man`,
      },
    ],
  },
  {
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
  },
];

describe(`Render Components from App`, () => {
  it(`Render App`, () =>{
    const tree = renderer.create(
        <App
          errorCount={3}
          questions={questions}
        />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
