const SONG_PLAYED = "SONG_PLAYED";

export const playSong = (song) => ({ type: SONG_PLAYED, payload: song });

const initialState = {
  song: null,
};

const playSongReducers = (state = initialState, action) => {
  switch (action.type) {
    case SONG_PLAYED:
      return { ...state, song: action.payload };
    default:
      return state;
  }
};

export default playSongReducers;
