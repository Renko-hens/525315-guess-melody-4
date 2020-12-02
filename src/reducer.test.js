import {reducer, ActionType, ActionCreator} from "./reducer.js";

const questions = [
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://cdn51.zvooq.com/track/stream?id=66320163&code=VOI5ldak-4xWMu1Ewwv7lA&expires=1595071557`,
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
        src: `https://cdn51.zvooq.com/track/stream?id=66452635&code=RL-eEA0ZHjBF2DOT6SAXwA&expires=1595071586`,
        genre: `Hip-Hop/Rap`,
      },
      {
        src: `https://cdn61.zvooq.com/track/stream?id=70557593&code=IqMSpwnWJ0Q_RTj2wlXvFQ&expires=1595071611`,
        genre: `Hip-Hop`,
      },
      {
        src: `https://cdn52.zvooq.com/track/stream?id=55043206&code=9ddN8OkjJuUL4GS-8him2Q&expires=1595071626`,
        genre: `Rap`,
      },
      {
        src: `https://cdn61.zvooq.com/track/stream?id=57769183&code=qyoacZD8kOSglCrFXa_P5A&expires=1595071635`,
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

  expect(reducer({
    maxMistakes: 3,
    mistakes: 0,
    step: 1,
    questions,
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  })).toEqual({
    maxMistakes: 3,
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


  expect(reducer({
    maxMistakes: 3,
    mistakes: 2,
    step: 0,
    questions,
  }, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1,
  })).toEqual({
    maxMistakes: 3,
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
    expect(ActionCreator.incrementMistake({
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

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for artist is incorrect`, () => {
    expect(ActionCreator.incrementMistake({
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
      artist: `incorrect`,
      picture: ``,
    })).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 1,
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for genre is incorrect`, () => {
    expect(ActionCreator.incrementMistake({
      type: `genre`,
      genre: `Hip-Hop/Rap`,
      answers: [
        {
          src: ``,
          genre: `Hip-Hop/Rap`,
        },
        {
          src: ``,
          genre: `Hip-Hop`,
        },
        {
          src: ``,
          genre: `Rap`,
        },
        {
          src: ``,
          genre: `country`,
        }
      ]
    }, [true, true, true, true])).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 1,
    });
  });
});
