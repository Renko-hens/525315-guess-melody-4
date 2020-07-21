const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://cdn51.zvooq.com/track/stream?id=66320163&code=VOI5ldak-4xWMu1Ewwv7lA&expires=1595071557`,
    },
    answers: [
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Noize MC`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Сплин`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
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
        type: `Hip-Hop/Rap`,
      },
      {
        src: `https://cdn61.zvooq.com/track/stream?id=70557593&code=IqMSpwnWJ0Q_RTj2wlXvFQ&expires=1595071611`,
        type: `Hip-Hop`,
      },
      {
        src: `https://cdn52.zvooq.com/track/stream?id=55043206&code=9ddN8OkjJuUL4GS-8him2Q&expires=1595071626`,
        type: `Rap`,
      },
      {
        src: `https://cdn61.zvooq.com/track/stream?id=57769183&code=qyoacZD8kOSglCrFXa_P5A&expires=1595071635`,
        type: `country`,
      }
    ],
  },
];
