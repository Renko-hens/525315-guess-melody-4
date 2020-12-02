const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3`,
    },
    answers: [
      {
        picture: `${AVATAR_URL}a`,
        artist: `Jim Beam`,
      },
      {
        picture: `${AVATAR_URL}/ab`,
        artist: `Сплин`,
      },
      {
        picture: `${AVATAR_URL}/ac`,
        artist: `Anacondaz`,
      },
    ],
  },
  {
    type: `genre`,
    genre: `Hip-Hop/Rap`,
    answers: [
      {
        src: `http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3`,
        genre: `Hip-Hop/Rap`,
      },
      {
        src: `http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3`,
        genre: `Hip-Hop`,
      },
      {
        src: `http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3`,
        genre: `Rap`,
      },
      {
        src: `http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3`,
        genre: `Country`,
      }
    ],
  },
];
