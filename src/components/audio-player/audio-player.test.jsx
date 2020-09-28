import React from "react";
import renderer from "react-test-renderer";
import AudioPlayer from "./audio-player.jsx";

const mock = {
  song: {
    src: `https://cdn51.zvooq.com/track/stream?id=66320163&code=VOI5ldak-4xWMu1Ewwv7lA&expires=1595071557`,
  },
};

it(`AudioPlayer is render correctly`, () => {
  const {song} = mock;

  const tree = renderer.create(<AudioPlayer
    isPlaying = {true}
    onPlayButtonClick = {() => {}}
    src={song.src}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
