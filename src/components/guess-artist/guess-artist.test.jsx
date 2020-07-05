import React from "react";
import renderer from "react-test-renderer";
import GuessArtistScreen from "./guess-artist.jsx";

const AVATAR_URL = `https://api.adorable.io/avatars/128`;

const questionArtist = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [
    {
      picture: `${AVATAR_URL}}`,
      artist: `Keanu Reves`,
    },
    {
      picture: `${AVATAR_URL}}`,
      artist: `John Wick`,
    },
    {
      picture: `${AVATAR_URL}}`,
      artist: `Neo Man`,
    },
  ],
};

describe(`Render Artist Screen components`, () => {
  it(`Render Artist Screen`, () => {
    const tree = renderer.create((
      <GuessArtistScreen
        onAnswer={() => {}}
        question={questionArtist}
      />), {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


