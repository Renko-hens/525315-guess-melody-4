const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [
      {
        picture: `${AVATAR_URL}A`,
        artist: `Jim Beam`,
      },
      {
        picture: `${AVATAR_URL}/AB`,
        artist: `Сплин`,
      },
      {
        picture: `${AVATAR_URL}/AC`,
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
