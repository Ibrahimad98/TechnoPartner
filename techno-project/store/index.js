import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  fetchNews: [],
  fetchNewsById: {},
  isLoading: true,
  tags: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "news/fetchNews":
      return {
        ...state,
        fetchNews: action.payload,
      };
    case "news/fetchNewsById":
      return {
        ...state,
        fetchNewsById: action.payload,
      };
    case "tags/tagsFetcher":
      return {
        ...state,
        tags: action.payload,
      };
    case "isLoading":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
