import { FETCH_POSTS } from "../actions/types";
import { FETCH_MORE_POSTS } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case FETCH_MORE_POSTS:
      if (!state.currentResults) {
        state.currentResults = [];
      }

      return {
        currentResults: [
          ...state.currentResults,
          ...action.payload.currentResults,
        ],
        totalResults: action.payload.totalResults,
      };
    default:
      return state;
  }
}
