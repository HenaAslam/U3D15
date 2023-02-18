import { GET_SONG } from "../action";

const initialState = {
  song: [],
  search: true,
};
const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONG:
      return {
        ...state,
        song: [].concat(...state.song, action.payload),
      };

    case "SEARCH_BAR":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default songReducer;
