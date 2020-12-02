import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "./app.jsx";

const mockStore = configureStore([]);

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
        picture: `${AVATAR_URL}/A}`,
        artist: `Keanu Reves`,
      },
      {
        picture: `${AVATAR_URL}/AB}`,
        artist: `John Wick`,
      },
      {
        picture: `${AVATAR_URL}/AC}`,
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
        genre: `rock`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `jazz`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `blues`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `country`,
      }
    ],
  },
];

describe(`Render Components from App`, () => {
  it(`Render App`, () =>{

    const store = mockStore({
      mistakes: 0,
    });

    const tree = renderer.create(
        <Provider store={store}>
          <App
            maxMistakes={3}
            questions={questions}
            onUserAnswer={() => {}}
            onWelcomeButtonClick={() => {}}
            step={-1}
          />
        </Provider>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Renderer GenreQuestionScreen`, () => {
    const store = mockStore({
      mistakes: 3,
    });

    const tree = renderer.create(
        <Provider store={store}>
          <App
            maxMistakes={3}
            questions={questions}
            onUserAnswer={() => {}}
            onWelcomeButtonClick={() => {}}
            step={0}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Renderer ArtistQuestionScreen`, () => {
    const store = mockStore({
      mistakes: 3,
    });

    const tree = renderer.create(
        <Provider store={store}>
          <App
            maxMistakes={3}
            questions={questions}
            onUserAnswer={() => {}}
            onWelcomeButtonClick={() => {}}
            step={1}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
