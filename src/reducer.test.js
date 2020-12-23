import {reducer, ActionType, ActionCreator} from "./reducer.js";

const questions = [
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [
      {
        picture: `https://api.adorable.io/avatars/128A`,
        artist: `Jim Beam`,
      },
      {
        picture: `https://api.adorable.io/avatars/128/AB`,
        artist: `Сплин`,
      },
      {
        picture: `https://api.adorable.io/avatars/128/AC`,
        artist: `Anacondaz`,
      },
    ],
  },
  {
    type: `genre`,
    genre: `Hip-Hop/Rap`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `Hip-Hop/Rap`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `Hip-Hop`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `Rap`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `country`,
      }
    ],
  },
];


it(`Reducer without additional parametrs should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    mistakes: 0,
    step: -1,
    maxMistakes: 3,
    questions,
  });
});

it(`Reducer should increment current step by a given value`, () => {
  expect(reducer({
    mistakes: 0,
    step: -1,
    questions,
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  })).toEqual({
    mistakes: 0,
    step: 0,
    questions,
  });

  expect(reducer({
    mistakes: 0,
    step: -1,
    questions,
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 0,
  })).toEqual({
    mistakes: 0,
    step: -1,
    questions,
  });
});

it(`Reducer should increment current mistakes by a given value`, () => {
  expect(reducer({
    mistakes: 0,
    step: -1,
    questions,
  }, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 10,
  })).toEqual({
    mistakes: 10,
    step: -1,
    questions,
  });

  expect(reducer({
    mistakes: 0,
    step: -1,
    questions,
  }, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 0,
  })).toEqual({
    mistakes: 0,
    step: -1,
    questions,
  });
});


describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    expect(ActionCreator.incrementStep()).toEqual({
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload if answer for artist is correct`, () => {
    expect(ActionCreator.incrementMistakes({
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``,
      },
      answers: [
        {
          artist: `correct`,
          picture: ``,
        }, {
          artist: `incorrect`,
          picture: ``,
        }, {
          artist: `incorrect-2`,
          picture: ``,
        },
      ]
    }, {
      artist: `correct`,
      picture: ``,
    })).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 0,
    });
  });
});
