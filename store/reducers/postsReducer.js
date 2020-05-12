import { FETCH_POSTS } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      if (!state.currentResults) {
        state.currentResults = [];
      }

      state.currentResults.push(...action.payload.currentResults);

      return {
        currentResults: state.currentResults,
        totalResults: action.payload.totalResults,
      };
    default:
      return state;
  }
}
