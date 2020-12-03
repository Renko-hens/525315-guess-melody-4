import React from "react";
import renderer from "react-test-renderer";
import Player from "./player.jsx.js";

const mock = {
  song: {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
};

it(`AudioPlayer is render correctly`, () => {
  const {song} = mock;

  const tree = renderer.create(<Player
    isPlaying = {true}
    isLoading = {true}
    onPlayButtonClick = {() => {}}
    src={song.src}
  >
    <audio/>
  </Player>, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
